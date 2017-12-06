import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

window.onload = () => {
  ReactDOM.render(<App/>, document.getElementById('main'));
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/serviceworker.js").then(function (registration) {
    console.log("Service Worker registered with scope:", registration.scope);
  }).catch(function (err) {
    console.log("Service Worker registration failed:", err);
  });
}
