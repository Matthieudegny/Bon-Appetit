import { useEffect } from 'react';
import './app.scss';
import { requestsspoon } from '../../request/request';
import Nav from '../Nav/Nav';
import Page from '../Page/Page';


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

  // useEffect(() => {

  //   fetchResults();
  //   //clean up
      

  // }, []);

  return (
    <div className="App">
      <Nav />
      <Page />
    </div>
  );
}

export default App;
