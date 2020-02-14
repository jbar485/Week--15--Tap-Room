import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Home from './Home';
import './App.css';

function App(){
  return (
    <div className='general'>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/kegs' component={KegList} />
        <Route path='/newkeg' component={NewKegForm} />
        <Route path='/editkeg' component={EditKegForm} />
      </Switch>
    </div>
  );
}

export default App;