import Reciepes from './Recipes/Recipes';
import ReciepesIdeas from './Suggestions/Suggestions';
import Fridge from './Fridge/Fridge';
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom';


function Content () {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="recipes" element={<Reciepes />} />
                <Route path="recipesIdeas" element={<ReciepesIdeas />} />
                <Route path="fridge" element={<Fridge />} />
                {/* <Route path="*" element={<Error />} /> */}
            </Routes>
        </div>

    )
}

export default Content;