import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import admission from './Components/admission';
import results from './Components/results';

function App() {
  return (
     <Switch>
     <Route path='/' exact  component={results} />
     <Route path='/admission' exact component={admission} />
     </Switch>
  );
}

export default App;
