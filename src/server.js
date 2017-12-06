import path from 'path';
import { Server } from 'http';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from './routes';
import compression from 'compression';

const app = express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(compression());
app.use('/', express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
    const context = {};

    const appWithRouter = (
        <StaticRouter location={req.url} context={context}>
            <Routes/>
        </StaticRouter>
    );

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    const markup = ReactDOMServer.renderToString(appWithRouter);

    // We will handle cache through service worker so we need to cancel it at server level.
    if (req.url.indexOf("/assets") === 0) {
        res.setHeader("Cache-Control", "public, max-age=60");
        res.setHeader("Expires", new Date(Date.now() + 60).toUTCString());
    }

    res.render('index', { markup });
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
