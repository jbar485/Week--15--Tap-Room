import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';


function KegList(props){
    var kegStyles = {
        marginLeft: '4%',
        marginRight: '4%',
        paddingBottom: '1%',
        marginTop: '15%',
        backgroundColor: 'white',
        paddingTop: '1%'
      }

      var kegLogo = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '2%'
      }

      var kegHeader = {
        borderBottom: "2px solid lightgray",
        marginBottom: '5px',
      }

      var address = {
        marginLeft: '24%',
      }

  return (
    <div style = {kegStyles}>
        <div style = {kegHeader}>
        <img style = {kegLogo} src="https://utfb-images.untappd.com/f4vvbxuNYWGcK53DeknH2vUv?auto=compress" alt="logo"/>
        <p>(360) 111-1111<span style = {address}>5612 NE 119th St Vancouver, Washington</span></p>
        </div>
      {props.kegList.map((keg) =>
        <Keg 
          onIncreasePint={props.onIncreasePint}
          onDecreasePint={props.onDecreasePint}
          pint={keg.pint}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          type={keg.type}
          beerLabel={keg.beerLabel}
          id={keg.id}
          key={keg.id}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;