import { useEffect } from 'react';
import './App.css';
import { requestsspoon } from '../../request/request';
import { Routes, Route } from 'react-router-dom';
import Menu from '../Menu/Menu'

function App() {

  const fetchResults = async () => {
    
      try{
        const result = await requestsspoon();
        console.log(result)
      }
      catch(err) {
        console.log(err)
        
      }
  };

  useEffect(() => {

    fetchResults();
    //clean up
      

  }, []);

  return (
    <div className="App">
      <Menu />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}

    </div>
  );
}

export default App;
