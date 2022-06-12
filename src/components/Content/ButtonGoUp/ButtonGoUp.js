import './ButtonGoUp.scss'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

function GoUp() {

    const backToTheTop= () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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


