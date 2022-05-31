import './recipes.scss'
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { actionFetchRecipes } from '../../../../actions/actions';

function Recipes() {

  const dispatch = useDispatch();


  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit")
    dispatch(actionFetchRecipes(searchValue))
  }

  const recipesList = useSelector((state) => state.recipesReducer.recipesList);
  console.log(recipesList)

  const resetValue = () => {
    setSearchValue("")
  }

    return(
      <div className="recipe">

        <form action="" autoComplete="off" className="recipe-inputContainer" onSubmit={handleSubmit}>
          <TextField 
          onChange={handleSearchChange}
          onSubmit={handleSubmit}
          onClick={resetValue}
          className='recipe-input' 
          id="outlined-uncontrolled"
          inputProps={{style: {backgroundColor:"transparent",fontFamily: 'Architects Daughter',fontSize:"2.5vw"}}} // font size of input text
          InputLabelProps={{style: {fontFamily: 'Architects Daughter',fontSize:"2vw",paddingLeft:"15%"}}} // font size of input label
          label="Write here the recipe you need" 
          variant="standard"
          color="warning"
          margin="dense"
          size="normal" />
        </form>
        
          
      </div>
    )
}

export default Recipes;