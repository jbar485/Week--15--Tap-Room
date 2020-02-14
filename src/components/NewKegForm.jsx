import React from 'react';

function NewKegForm(){
  var NewKegFormStyles = {
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
  

    
  }

  return (
    <div style = {NewKegFormStyles}>
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
          placeholder='Alcohol Content'/>
          <input style = {inputStyles}
          id='type'
          placeholder='Type'/>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default NewKegForm;