import React from 'react';

function NewKegForm(){
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
      <form>
        <input style = {inputStyles}
          type='text'
          id='name'
          placeholder='Keg Name'/>
        <input style = {inputStyles}
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input style = {inputStyles}
          id='price'
          placeholder='Price'/>
          <input style = {inputStyles}
          id='alcoholContent'
          placeholder='ABV'/>
          <input style = {inputStyles}
          id='type'
          placeholder='Type'/> 
          <input style = {inputStyles}
          id='beerLabel'
          placeholder='Image URL'/><br></br>
        <button type="submit" class="btn btn-outline-danger">Create</button>
      </form>
    </div>
  );
}

export default NewKegForm;