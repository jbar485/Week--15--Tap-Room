import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Error404 from './Error404';
import './App.css';

function App(){
  return (
    <div className='general'>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/kegs' component={KegList} />
        <Route path='/newkeg' component={NewKegForm} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;