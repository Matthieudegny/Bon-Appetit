import './ButtonGoUp.scss'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

function GoUp() {

    const backToTheTop= () => {
        document.getElementById("top-page").scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
    }

    return(

        <div className="container-buttonUp">

            <button 
            className='buttonUp'
            onClick={backToTheTop}>
                <RestaurantMenuIcon 
                className='buttonUp-logo'/>
                 Back top of page
            </button>

        </div>
    )
}

export default GoUp;


