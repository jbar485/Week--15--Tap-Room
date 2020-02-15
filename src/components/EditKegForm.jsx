import React from 'react';

function EditKegForm(){
  var EditKegFormStyles = {
    textAlign: "center",
    backgroundColor: "",
    margin: "20px",
    padding: "20px",
  }

  var inputStyles = {
    textAlign: "center",
    margin: "20px",
    padding: "20px",
    border: "2px solid black",
    height: "15px",
    width: "150px",
    borderRadius: '5px',
  }

  return (
    <div style = {EditKegFormStyles}>
        <h1> Edit Keg </h1>
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
          placeholder='Image URL'/>
        <br></br><button type='submit' class="btn btn-outline-danger">Update</button>
      </form>
    </div>
  );
}

export default EditKegForm;