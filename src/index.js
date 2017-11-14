import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import './css/index.scss';

import { Navigation } from './components/Navigation';
import { Settings } from './components/Settings';
import { Game } from './components/Game';

class App extends React.Component {
  render(){
    return(
      <div id="appContainer">
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
          <Route exact path='/' component={Settings} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/game' component={Game} />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    )
  }
}
render(<App/>,document.getElementById('app'));
