import React from 'react';
import Header from './Header';
import Footer from './Footer';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
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
    this.handleIncreasePint = this.handleIncreasePint.bind(this);
    this.handleDecreasePint = this.handleDecreasePint.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  handleIncreasePint(id){
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.forEach(function(keg){
      if (keg.id == id) {
        keg.pint += 1;
        if (keg.pint >= 125) {
          keg.pint -= 1;
        }
      }
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleDecreasePint(id){
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.forEach(function(keg){
      if (keg.id == id) {
        keg.pint -= 1;
        if (keg.pint <= -1) {
          keg.pint += 1
        }
      }
    });
    this.setState({masterKegList: newMasterKegList});
  }


  render(){
    return (
      <div className='general'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/kegs' render={()=><KegList kegList={this.state.masterKegList} onIncreasePint={this.handleIncreasePint} onDecreasePint={this.handleDecreasePint}/>} />
          <Route path='/newkeg' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;