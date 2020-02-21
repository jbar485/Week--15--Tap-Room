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

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterKegList [
        {
          name:'Trash',
          brand: 'TroyBoy',
          price:'$10.00',
          alcoholContent: '0.01%',
          type:'Lager',
          beerLabel:'https://untappd.akamaized.net/site/beer_logos/beer-687467_f22ab_sm.jpeg',
        },
        {
          name:'Chich',
          brand: 'TroyBoy',
          price:'$25.00',
          alcoholContent: '100%',
          type:'Moon Shine',
          beerLabel:'https://untappd.akamaized.net/site/beer_logos/beer-1347185_550de_sm.jpeg',
        },
        {
          name:'Your my boy blue',
          brand: 'Brew Bus Brewing',
          price:'$5.00',
          alcoholContent: '9.4%',
          type:'Porter',
          beerLabel:'https://untappd.akamaized.net/site/beer_logos/beer-654408_1e75e_sm.jpeg',
        },
        {
          name:'Badlands Pilsner',
          brand: 'Heathen Brewing',
          price:'$8.00',
          alcoholContent: '5.2%',
          type:'American Pilsner',
          beerLabel:'https://untappd.akamaized.net/site/brewery_logos/brewery-28019_86c28.jpeg',
        },
        {
          name:'Promiscuouse Blonde',
          brand: 'Heathen Brewing',
          price:'$5.50',
          alcoholContent: '5.5%',
          type:'Blonde Ale',
          beerLabel:'https://untappd.akamaized.net/site/beer_logos/beer-234300_ce47a_sm.jpeg',
        },
        {
          name:'Wabbit Saison',
          brand: 'Heathen Brewing',
          price:'$11.50',
          alcoholContent: '6.2%',
          type: 'Belgian-Style Saison',
          beerLabel:'https://untappd.akamaized.net/site/beer_logos/beer-3428585_3f464_sm.jpeg',
        }
      ]
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
          <Route path='/kegs' component={KegList} />
          <Route path='/newkeg' component={NewKegForm} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;