import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div >
        <h3>{props.name}</h3><h3>{props.type}</h3>
        <p><em>{props.alcoholContent}</em></p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Keg;