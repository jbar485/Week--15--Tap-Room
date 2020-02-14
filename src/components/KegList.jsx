import React from 'react';
import Keg from './Keg';

var masterKegList =  [
  {
    name:'Trash',
    brand: 'TroyBoy',
    price:'$10.00',
    alcoholContent: '0.01%'
  },
  {
    name:'Chich',
    brand: 'TroyBoy',
    price:'$25.00',
    alcoholContent: '100%'
  },
  {
    name:'Your my boy blue',
    brand: 'Brew Bus Brewing',
    price:'$5.00',
    alcoholContent: '9.4%'
  },
  {
    name:'Badlands Pilsner',
    brand: 'Heathen Brewing',
    price:'$8.00',
    alcoholContent: '5.2%'
  },
  {
    name:'Promiscuouse Blonde',
    brand: 'Heathen Brewing',
    price:'$5.50',
    alcoholContent: '5.5%'
  }
];


function KegList(){

  return (
    <div>
      {masterKegList.map((keg,index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;