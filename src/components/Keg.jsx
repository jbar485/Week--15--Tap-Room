import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Keg.css'

function Keg(props){
  var kegStyles = {
    marginLeft: '2%',

  }

  var kegImage = {
    float: 'left',
    width: '100px',
    height: '100px',
  }

  var kegLink = {
    marginLeft: '80%',
  }

  return (
    <div>
      <div style = {kegStyles}>
        <img style = {kegImage} src={props.beerLabel} alt={props.name}></img>
        <h3>{props.name}, <em>{props.type}</em></h3>
        <p>{props.alcoholContent}% ~ {props.brand}</p>
        <p>{props.price}</p>
        <div className='pints'>
        <button id="decrease" onClick={() => props.onDecreasePint(props.id)}  class="btn btn-outline-danger">-</button>
          <p id="number">{props.pint}</p>
          <button id="increase" onClick={() => props.onIncreasePint(props.id)} class="btn btn-outline-success">+</button>
        </div>
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
  beerLabel: PropTypes.string.isRequired,
  pint: PropTypes.number.isRequired
};

export default Keg;