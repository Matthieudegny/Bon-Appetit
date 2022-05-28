import './home.scss'
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import KitchenIcon from '@mui/icons-material/Kitchen';
import CardHome from './CardHome/CardHome'
import fridgeImage from '../../public/fridge.jpg'
import recipesImage from '../../public/recipes.jpg'
import recipesIdeasImage from '../../public/recipesideas.jpg'

function Home() {
    return(
    <div className="container">
        <CardHome className="firstChild"
        image = {recipesImage}
        description = {"Vous souhaitez obtenir une recette en particulier, nos chefs sont la pour vous"}
        title = {'Recipes'}
        link = {'/recipes'}
        logo = {<TakeoutDiningIcon />}
        nameLink = {"Recipes"}
        />
        <CardHome 
        image = {recipesIdeasImage}
        description = {"Pas d'idées pour votre repas, découvrez nos suggestions"}
        title = {'Recipes Ideas'}
        link = {'/recipesIdeas'}
        logo = {<TipsAndUpdatesIcon />}
        nameLink = {"Recipes"}
        />
        <CardHome 
        image = {fridgeImage}
        description = {"Il vous reste des aliments dans votre frigo mais vous ne savez pas quoi faire, laissez nous vous aider"}
        title = {'Fridge'}
        link = {'/fridge'}
        logo = {<KitchenIcon />}
        nameLink = {"Recipes"}
        />
    </div>
    )
}

export default Home;