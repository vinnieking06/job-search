import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Job from './Job'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';



const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exactly path="/" component={App} />
        <Route path ="/job/:id" component={Job} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))

registerServiceWorker();
