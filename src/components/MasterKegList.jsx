import { v4 } from 'uuid';

let masterKegList = [
  {
    name:'Trash',
    brand: 'TroyBoy',
    price:'$10.00',
    alcoholContent: '0.01%',
    type:'Lager',
    beerLabel:'https://untappd.akamaized.net/site/beer_logos/beer-687467_f22ab_sm.jpeg',
    id: v4(),
  },
  {
    name:'Chich',
    brand: 'TroyBoy',
    price:'$25.00',
    alcoholContent: '100%',
    type:'Moon Shine',
    beerLabel:'https://untappd.akamaized.net/site/beer_logos/beer-1347185_550de_sm.jpeg',
    id: v4(),
  },
  {
    name:'Your my boy blue',
    brand: 'Brew Bus Brewing',
    price:'$5.00',
    alcoholContent: '9.4%',
    type:'Porter',
    beerLabel:'https://untappd.akamaized.net/site/beer_logos/beer-654408_1e75e_sm.jpeg',
    id: v4(),
  },
  {
    name:'Badlands Pilsner',
    brand: 'Heathen Brewing',
    price:'$8.00',
    alcoholContent: '5.2%',
    type:'American Pilsner',
    beerLabel:'https://untappd.akamaized.net/site/brewery_logos/brewery-28019_86c28.jpeg',
    id: v4(),
  },
  {
    name:'Promiscuouse Blonde',
    brand: 'Heathen Brewing',
    price:'$5.50',
    alcoholContent: '5.5%',
    type:'Blonde Ale',
    beerLabel:'https://untappd.akamaized.net/site/beer_logos/beer-234300_ce47a_sm.jpeg',
    id: v4(),
  },
  {
    name:'Wabbit Saison',
    brand: 'Heathen Brewing',
    price:'$11.50',
    alcoholContent: '6.2%',
    type: 'Belgian-Style Saison',
    beerLabel:'https://untappd.akamaized.net/site/beer_logos/beer-3428585_3f464_sm.jpeg',
    id: v4(),
  },
];

export default masterKegList;