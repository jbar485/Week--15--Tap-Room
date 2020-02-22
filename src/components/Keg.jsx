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
        <h5>{props.name}, <em>{props.type}</em></h5>
        <p className='aboutKeg'>{props.alcoholContent}% <span>&#183;</span> {props.brand} <span>&#183;</span> Troy3oy Brewing <span>&#183;</span> Battlegroung, WA</p>
        <p className='price'>16oz Can<span>&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;</span>{props.price}</p>
        <p className="availableKegs">Pints</p>
        <div className='pints'>
        <button onClick={() => props.onDecreasePint(props.id)}  className="btn btn-outline-danger decrease">-</button>
          
          <p className="number">{props.pint}</p>
          <button onClick={() => props.onIncreasePint(props.id)} className="btn btn-outline-success increase">+</button>
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