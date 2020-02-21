import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Error404 from './Error404';
import MasterKegList from './MasterKegList';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterKegList: MasterKegList
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    let newMasterKegForm = this.state.masterKegList.slice();
    newMasterKegForm.push(newKeg);
    this.setState({masterKegList: newMasterKegForm});
  }

  render(){
    return (
      <div className='general'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/kegs' render={()=><KegList kegList={this.state.masterKegList}/>} />
          <Route path='/newkeg' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;