import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route} from "react-router-dom";
import { main as mainConfig} from './router/index'
import { RenderRoutes } from './router/utils'
import Index  from './views/index/index';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Route
                  path="/login"
                  component = {Index}
              />

            {/*<RenderRoutes routes={mainConfig}></RenderRoutes>*/}
          </div>
        </Router>
    );
  }
}

export default App;
