import Reciepes from '../Recipes/Recipies';
import ReciepesIdeas from '../RecipiesIdeas/RecipiesIdeas';
import Fridge from '../Fridge/Fridge';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';

function Content () {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="reciepies" element={<Reciepes />} />
                <Route path="reciepiesIdeas" element={<ReciepesIdeas />} />
                <Route path="fridge" element={<Fridge />} />
            </Routes>
        </div>

    )
}

export default Content;