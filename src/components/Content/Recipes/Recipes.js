import './recipes.scss'
import '../CardRecipes/cardRecipes.scss'
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import CardRecipes from '../CardRecipes/CardRecipes';
import Skeleton from '@mui/material/Skeleton';
import { actionFetchRecipes } from '../../../actions/actions';
import { actionLoadingTrue } from '../../../actions/actions';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
const theme = createTheme();

theme.typography = {
  fontSize: '5.2rem',
  '@media (min-width:600px)': {
    fontSize: '8.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '8rem',
  },
};

function Recipes() {

  const dispatch = useDispatch();


  const [searchValue, setSearchValue] = useState('');


  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionLoadingTrue())
    dispatch(actionFetchRecipes(searchValue))
  }

  const recipesList = useSelector((state) => state.recipesReducer.recipesList);
  const loading = useSelector((state) => state.recipesReducer.loading);
  const message = useSelector((state) => state.recipesReducer.message)

  const resetValue = () => {
    setSearchValue("")
  }

    return(
      <div className="recipe">

            <form action="" autoComplete="off" className="recipe-inputContainer" onSubmit={handleSubmit}>
             
              <label
              className='recipe-label'>
                Write here the recipe you need
              </label>

              <input 
              type="text"
              onChange={handleSearchChange}
              onSubmit={handleSubmit}
              onClick={resetValue}
              value = {searchValue}
              className='recipe-input'  />

              <button
              type='submit'
              className='recipe-button'>
                Search
              </button>
          
            </form>

        {message ? (

          <div className='recipe-message'>{message}</div>

        ) : (

          <>
          </>

        )}

        {loading ? (

        [...Array(3)].map((_, index) => (

          <div className="cardRecipes" key={index}>

            <div className="cardRecipes-header">
              <Skeleton variant="text" sx={{width:"30vw",height:"10vh",margin:"auto"}}/>

              <Skeleton variant="rectangular" sx={{width:"30vw", height:"30vh"}}/>
              
            </div>

            <div className="cardRecipes-body">
              <section className="cardRecipes-body-left" >

              <Skeleton variant="text" sx={{width:"15vw",height:"5vh",marginRight:"10%"}}/>
            
              <div className='cardRecipes-ingredients'>
                <Skeleton variant="text" sx={{width:"80%",height:"5vh",marginTop:"5vh"}}/>
                <Skeleton variant="text" sx={{width:"80%",height:"5vh"}}/>
                <Skeleton variant="text" sx={{width:"80%",height:"5vh"}}/>
                <Skeleton variant="text" sx={{width:"80%",height:"5vh"}}/>                    
              </div>

              </section>

              <section className="cardRecipes-body-right" >
                
                  <Skeleton variant="text" sx={{width:"100%",height:"5vh",marginTop:"5vh"}}/>
                  <Skeleton variant="text" sx={{width:"100%",height:"5vh"}}/>
                  <Skeleton variant="text" sx={{width:"100%",height:"5vh"}}/>
                  <Skeleton variant="text" sx={{width:"100%",height:"5vh"}}/>
                  <Skeleton variant="text" sx={{width:"100%",height:"5vh"}}/>   
                
              </section>
            </div>

          </div>
            
        ))

        ) : (

        <div>
          {recipesList.map(({
              data
            }) => (
            <CardRecipes 
              key = {data.id}
              ingredients = {data.extendedIngredients}
              image = {data.image}
              time = {data.readyInMinutes}
              title = {data.title}
              explanations = {data.instructions? data.instructions : data.summary}
            /> 
          ))}
        </div>
       

        )}

       

        {/*ajouter bouton pour supprimer le contenu en haut + un suggestions aide? et un autre en bas pour retoruner à la recherceh*/}

      </div>
    )
}

export default Recipes;