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
  }

  var kegLink = {
    marginLeft: '80%',
  }

  return (
    <div>
      <div style = {kegStyles}>
        <img style = {kegImage} src={props.beerLabel} alt={props.name}></img>
        <h3>{props.name}, <em>{props.type}</em></h3><Link style = {kegLink} to="/editkeg">Edit</Link>
        <p>{props.alcoholContent} ~ {props.brand}</p>
        <p>{props.price}</p>
        <form>
          <div class="value-button" id="decrease" onClick={() => props.onDecreasePint(props.id)}>-</div>
          <p id="number">{props.pint}</p>
          <div class="value-button" id="increase" onClick={() => props.onIncreasePint(props.id)}>+</div>
        </form>
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