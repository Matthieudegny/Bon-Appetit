import './recipes.scss'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function Recipes({onSubmit}) {

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchValue);
  }

  const resetValue = () => {
    setSearchValue("")
  }

    return(
      <div className="recipe">
          
            <form action="" className="recipe-inputContainer" onSubmit={handleSubmit}>
              <TextField 
              onChange={handleSearchChange}
              onSubmit={handleSubmit}
              onClick={resetValue}
              className='recipe-input' 
              id="outlined-uncontrolled"
              inputProps={{style: {fontFamily: 'Architects Daughter',fontSize:"20px"}}} // font size of input text
              InputLabelProps={{style: {fontFamily: 'Architects Daughter',fontSize:"2vw"}}} // font size of input label
              label="Write here the recipe you need" 
              variant="standard"
              color="warning" />
            </form>
          
      </div>
    )
}

export default Recipes;