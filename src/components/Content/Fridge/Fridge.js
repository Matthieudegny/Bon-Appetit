import './fridge.scss'
import '../CardRecipes/cardRecipes.scss'
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardRecipes from '../CardRecipes/CardRecipes';
import Skeleton from '@mui/material/Skeleton';
import { actionFetchRecipesFridge } from '../../../actions/actions';
import { actionLoadingFridgeTrue } from '../../../actions/actions';
import { actionSearchValueFridgeNull } from '../../../actions/actions';
import ButtonGoUp from '../ButtonGoUp/ButtonGoUp';

function Fridge() {

  const dispatch = useDispatch();


  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(searchValue === ""){
      console.log("null")
      dispatch(actionSearchValueFridgeNull())
    } else {
      const listFridgeToFetch = createListIngredientsFridge(searchValue)
      dispatch(actionLoadingFridgeTrue())
      dispatch(actionFetchRecipesFridge(listFridgeToFetch))
    }
  }

  const createListIngredientsFridge = (searchValue) => {

      const fridgeValue = searchValue.trim(); 

      const listIngredients = fridgeValue.split(' ')

      console.log(listIngredients)

      let listIngredientsFridge = []

      listIngredients.forEach((ingredient, index) => {
          if(index === 0){
              listIngredientsFridge.push(ingredient)
          }
          else{
              listIngredientsFridge.push(`+${ingredient}`)
          }
      })

      const listFridge = listIngredientsFridge.toString() 

      return listFridge
  }

 

  const recipesList = useSelector((state) => state.fridgeReducer.recipesListFridge);
  const loading = useSelector((state) => state.fridgeReducer.loading);
  const message = useSelector((state) => state.fridgeReducer.message)

  const resetValue = () => {
    setSearchValue("")
  }

    return(
      <div className="recipeFridge" id="top-page">

        <form action="" autoComplete="off" className="recipeFridge-inputContainer" onSubmit={handleSubmit}>
  
              <label
              className='recipeFridge-label'>
                Write here the ingredients you need to cook
              </label>

              <input 
              type="text"
              onChange={handleSearchChange}
              onSubmit={handleSubmit}
              onClick={resetValue}
              value = {searchValue}
              className='recipeFridge-input'  />

              <button
              type='submit'
              className='recipeFridge-button'>
                Search
              </button>

        </form>

        {message ? (

          <div className='recipeFridge-message'>{message}</div>

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

        {recipesList.length===0 ? (
         
         <>
         </>

        ) : (
     
          <ButtonGoUp />
          
        )}

      </div>
    )
}

export default Fridge;