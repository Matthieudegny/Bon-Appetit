import './home.scss'
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import KitchenIcon from '@mui/icons-material/Kitchen';
import CardHome from './CardHome/CardHome'
import fridgeImage from '../../../public/fridge.jpg'
import recipesImage from '../../..//public/recipes.jpg'
import recipesIdeasImage from '../../../public/recipesideas.jpg'

function Home() {
    return(
    <div className="container">
        <CardHome className="firstChild"
        image = {recipesImage}
        description = {"You know what you want to eat,and you want to get a recipe"}
        title = {'Recipes'}
        link = {'/recipes'}
        logo = {<TakeoutDiningIcon />}
        nameLink = {"A particular recipe"}
        />
        <CardHome 
        image = {recipesIdeasImage}
        description = {"No ideas for your meal, discover our suggestions"}
        title = {'Suggestions'}
        link = {'/recipesIdeas'}
        logo = {<TipsAndUpdatesIcon />}
        nameLink = {"Recipe suggestions"}
        />
        <CardHome 
        image = {fridgeImage}
        description = {"You have specific ingredients, but you don't know how to cook"}
        title = {'Fridge'}
        link = {'/fridge'}
        logo = {<KitchenIcon />}
        nameLink = {"A recipe based on your food"}
        />
    </div>
    )
}

export default Home;