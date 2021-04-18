// Packages
import { hot } from "react-hot-loader"; 
import * as React from "react"; 
import { HashRouter, Route, Switch } from 'react-router-dom'; 

// Styles
import "./style.scss"; 

// Components
import Home from './components/home'; 
import Counter from './components/counter'; 


interface Counter {
  counter: number;
}


const App = () => {
  return(
    <HashRouter>
      <Switch>
        <Route path='/'>
          <Counter /> 
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default hot(module)(App);
