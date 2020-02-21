import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _type = null;
  let _beerLabel = null;

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, type: _type.value, beerLabel: _beerLabel.value, id:v4()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _type.value = '';
    _beerLabel.value = '';
  }

  var NewKegFormStyles = {
    textAlign: "center",
    margin: "20px",
    padding: "20px",
  }
  var inputStyles = {
    textAlign: "center",
    margin: "20px",
    padding: "20px",
    border: "2px solid red",
    height: "15px",
    color: 'red',
    width: "150px",
    borderRadius: '5px',
  }

  return (
    <div style = {NewKegFormStyles}>
        <h1> New Keg </h1>
      <form onSubmit={handleNewKegFormSubmission}>
        <input style = {inputStyles}
          type='text'
          id='name'
          placeholder='Keg Name'/>
          ref={(input) => {_name = input;}}/>
        <input style = {inputStyles}
          type='text'
          id='brand'
          placeholder='Brand'/>
          ref={(input) => {_brand = input;}}/>
        <input style = {inputStyles}
          id='price'
          placeholder='Price'/>
          ref={(input) => {_price = input;}}/>
          <input style = {inputStyles}
          id='alcoholContent'
          placeholder='ABV'/>
          ref={(input) => {_alcoholContent = input;}}/>
          <input style = {inputStyles}
          id='type'
          placeholder='Type'/>
          ref={(input) => {_type = input;}}/>
          <input style = {inputStyles}
          id='beerLabel'
          placeholder='Image URL'/>
          ref={(input) => {_beerLabel = input;}}/><br></br>
        <button type="submit" class="btn btn-outline-danger">Create</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;