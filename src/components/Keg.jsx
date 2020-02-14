import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
    var kegStyles = {
        marginBottom: '100px'
    }
  return (
      <div>
    <div style = {kegStyles}>
        <img src={props.beerLabel} alt={props.name}></img>
        <h3>{props.name}, <em>{props.type}</em></h3>
        <p>{props.alcoholContent} ~ {props.brand}</p>
        <p>{props.price}</p>
    </div>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  beerLabel: PropTypes.string.isRequired
};

export default Keg;