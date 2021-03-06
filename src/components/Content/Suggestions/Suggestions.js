import './suggestions.scss'
import '../CardRecipes/cardRecipes.scss'
import { actionFetchSuggestions } from '../../../actions/actions';
import { actionLoadingSuggestionsTrue } from '../../../actions/actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import CardRecipes from '../CardRecipes/CardRecipes';
import ButtonGoUp from '../ButtonGoUp/ButtonGoUp';

function ReciepesIdeas() {

    const dispatch = useDispatch();

    const [valueSelected, setValueSelected] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault();

       if(!valueSelected){
           setMessage("Before to search, please select a type of meal")
       }
       else{
           setMessage("")
           dispatch(actionLoadingSuggestionsTrue())
           dispatch(actionFetchSuggestions(valueSelected))
       }
      
    }

    const suggestions = useSelector((state) => state.suggestionsReducer.suggestions);
    const loading = useSelector((state) => state.suggestionsReducer.loading);   

    return(

        <div className="suggestions" id="top-page">

            <form onSubmit={handleSubmit}>

                <label
                className='suggestions-label'>
                    Select the kind of meal you are searching
                </label>

                <div className='suggestions-container-inputs'>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' id="breakfast" name="suggestion" onClick={() => setValueSelected("breakfast")}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' id="lunch" name="suggestion" onClick={() => setValueSelected("lunch")} />
                        <label htmlFor="lunch">Lunch</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' id="dinner" name="suggestion" onClick={() => setValueSelected("dinner")}/>
                        <label htmlFor="dinner">Dinner</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' id="entree" name="suggestion" onClick={() => setValueSelected("entree")}/>
                        <label htmlFor="entree">Entree</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' id="main-dish" name="suggestion" onClick={() => setValueSelected("main dish")}/>
                        <label htmlFor="main-dish">Main-dish</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' id="dessert" name="suggestion" onClick={() => setValueSelected("dessert")}/>
                        <label htmlFor="dessert">Dessert</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' id="vegetarian" name="suggestion" onClick={() => setValueSelected("vegetarian,main course")}/>
                        <label htmlFor="vegetarian">Vegetarian</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' id="soup" name="suggestion" onClick={() => setValueSelected("soup")}/>
                        <label htmlFor="soup">Soup</label>
                    </div>
                    
                </div>

                <div className='suggestions-container-button'>
                    <button 
                    type='submit'
                    className="suggestions-button">
                        Search
                    </button>
                </div>
              
            </form>

            {message ? (

            <div className='suggestions-message'>{message}</div>

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
                    {suggestions.map((suggestion) => (
                        <CardRecipes 
                        key = {suggestion.id}
                        ingredients = {suggestion.extendedIngredients}
                        image = {suggestion.image}
                        time = {suggestion.readyInMinutes}
                        title = {suggestion.title}
                        explanations = {suggestion.instructions? suggestion.instructions : suggestion.summary}
                        /> 
                    ))}
                    
                </div>

            )}

            {suggestions.length===0 ? (
            
            <>
            </>

            ) : (
        
            <ButtonGoUp />
            
            )}


        </div>
    )
}

export default ReciepesIdeas;