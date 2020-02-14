import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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