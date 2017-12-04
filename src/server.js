import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from './routes';

const app = Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
    const context = {};

    const appWithRouter = (
        <StaticRouter basename="/shiba-squad" location={req.url} context={context}>
            <Routes />
        </StaticRouter>
    );

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    const markup = ReactDOMServer.renderToString(appWithRouter);

    res.render('index', { markup });
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
