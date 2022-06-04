import './cardRecipes.scss'
import PropTypes from 'prop-types';


function CardRecipes ({
    ingredients,
    image,
    time,
    title,
    explanations,

}) {
   
    
    let ingredientsList = []

    ingredients.map((ingredient, i) => {
    
        ingredientsList.push(<li key={i}>  {ingredient.amount} {ingredient.unit} {ingredient.name}</li>)
    })
   
    
    return(
        <div className="cardRecipes">

            <div className="cardRecipes-header">
            <h2>{title}</h2>
            
            <div className='cardRecipes-container-image'>
                <img className='cardRecipes-image' src={image} alt="" />
            </div>
            </div>

            <div className="cardRecipes-body">

                <section className="cardRecipes-body-left" >

                <h4>preparation time: {time} min</h4>

                <div className='cardRecipes-ingredients'>
                    {ingredientsList}
                </div>

                </section>

                <section className="cardRecipes-body-right" >
                <div 
                className='cardRecipes-explanations'
                dangerouslySetInnerHTML={{__html: explanations}}>                    
                </div>
                </section>

            </div>

        </div>
    )
}

CardRecipes.propTypes = {
    image: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    explanations: PropTypes.string.isRequired,
};


export default CardRecipes