import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Job from './Job';
import CreateJob from './CreateJob';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path ="/job/:id" component={Job} />
        <Route exact path="/createjob" component={CreateJob} />

      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))

registerServiceWorker();
