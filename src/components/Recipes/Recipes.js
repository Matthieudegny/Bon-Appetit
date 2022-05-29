import './recipes.scss'
import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { requestsRecipe } from '../../request/request';
import TextField from '@mui/material/TextField';
import { actionFetchRecipes } from '../../actions/actions';

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
  //fetchResults(searchValue)
 

  // useEffect(() => {

  //   fetchResults();
  //   //clean up
      

  // }, []);


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