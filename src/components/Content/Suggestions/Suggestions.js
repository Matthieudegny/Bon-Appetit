import './suggestions.scss'
import '../CardRecipes/cardRecipes.scss'
import { actionFetchSuggestions } from '../../../actions/actions';
import { actionLoadingSuggestionsTrue } from '../../../actions/actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import CardRecipes from '../CardRecipes/CardRecipes';

function ReciepesIdeas() {

    const dispatch = useDispatch();

    const [valueSelected, setValueSelected] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault();

       if(!valueSelected){
           setMessage("Before to search a recipe, please select a type of meal")
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

        <div className="suggestions">

            <form action="" onSubmit={handleSubmit}>

                <label
                className='suggestions-label'>
                    Select the kind of meal you are searching
                </label>

                <div className='suggestions-container-inputs'>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' name="suggestion" onClick={() => setValueSelected("breakfast")}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' name="suggestion" onClick={() => setValueSelected("lunch")} />
                        <label htmlFor="lunch">Lunch</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' name="suggestion" onClick={() => setValueSelected("dinner")}/>
                        <label htmlFor="dinner">Dinner</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' name="suggestion" onClick={() => setValueSelected("entree")}/>
                        <label htmlFor="entree">Entree</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' name="suggestion" onClick={() => setValueSelected("main-dish")}/>
                        <label htmlFor="main-dish">Main-dish</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" className='suggestions-inputs-radio' name="suggestion" onClick={() => setValueSelected("dessert")}/>
                        <label htmlFor="dessert">Dessert</label>
                    </div>
                    
                </div>

                <div className='suggestions-container-button'>
                    <button 
                    type='submit'
                    className="suggestions-button">
                        Search
                    </button>
                </div>

                <div className='suggestions-container-message'>
                    <p>{message}</p>
                </div>
               

            </form>        


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



                {/*ajouter bouton pour supprimer le contenu en haut + un suggestions aide? et un autre en bas pour retoruner à la recherceh*/}

              


        </div>
    )
}

export default ReciepesIdeas;