import { useEffect } from 'react';
import './app.scss';
import { requestsspoon } from '../../request/request';
import Menu from '../Menu/Menu';
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

  useEffect(() => {

    fetchResults();
    //clean up
      

  }, []);

  return (
    <div className="App">
      <Menu />
      <Page />
    </div>
  );
}

export default App;
