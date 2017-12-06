import React from 'react';
import { Link } from 'react-router-dom';

export default class AppShell extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/app-icon/app-icon-144.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a Progressive Web App that showcases universal JS rendering and routing with <strong>React</strong>, <strong>Node</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    );
  }
}
