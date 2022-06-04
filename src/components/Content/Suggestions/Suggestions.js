import './suggestions.scss'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState } from 'react';

function ReciepesIdeas() {

    let [valueSelected, setValueSelected] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
       console.log(event.target)
       
   
     
      
    }

    console.log(valueSelected)

    return(

        <div className="suggestions">

            <div>

                

                <div className='suggestions-inputs'>
                    <input type="radio" name="search" onClick={() => setValueSelected("Lunch")} />
                    <label >Lunch</label>
                </div>

                <div className='suggestions-inputs'>
                    <input type="radio" name="search" onClick={() => setValueSelected("breakfast")}/>
                    <label >Breakfast</label>
                </div>

            </div>

            {/* <form action="" onSubmit={handleSubmit}>

                <div className='suggestions-container-title'>
                    <p>Please Select the kind of meal you are searching</p>
                </div>

                <div className='suggestions-container-inputs'>

                    <div className='suggestions-inputs'>
                        <input type="radio" name="breakfast" value="breakfast" id="breakfast" />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" name="lunch" />
                        <label htmlFor="lunch">Lunch</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" name="dinner" />
                        <label htmlFor="dinner">Dinner</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" name="entree" />
                        <label htmlFor="entree">Entree</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" name="main-dish" />
                        <label htmlFor="main-dish">Main-dish</label>
                    </div>

                    <div className='suggestions-inputs'>
                        <input type="radio" name="dessert" />
                        <label htmlFor="dessert">Dessert</label>
                    </div>
                    
                </div>

                <button 
                type='submit'
                className="suggestions-button">
                    Search
                </button>

            </form> */}
        </div>
    )
}

export default ReciepesIdeas;