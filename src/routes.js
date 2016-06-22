import React from 'react';
import { Route, IndexRoute, IndexRedirect} from 'react-router';
import App from './components/app.react';

import Child from './components/child.react';
import Display from './components/display.react';
import Update from './components/update.react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Display}/>
    <Route path="/addContact" component={Child} />
    <Route path="/updateContact/:id" component={Update} />
  </Route>
);
    // <IndexRoute component={Greeting1} />
