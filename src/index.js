import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Match, Miss } from 'react-router'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/job/:jobId" component={Job} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))

registerServiceWorker();
