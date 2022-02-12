import './App.css';
import {useState,useEffect} from 'react';


function App() {

  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  const [users,setUsers] = useState([]); 

  const url = "https://api.github.com/users";
  const apiData = ()=>{
     fetch(url)
     .then(response => {
      
      if(response.status >=200 && response.status <=399){
        return response.json();
      }
      else{
        setIsLoading(false);
        setIsError(true);
        throw new Error(response.statusText);
      } }
     )
     .then(users => {
       setUsers(users);
       setIsLoading(false);
       console.log(users);

      })
      .catch(error => console.log(error));

  }

  useEffect(()=>{
    apiData();
  },[])

  if(isLoading){
    return (
      <div className="App">
        <h1>Loading...</h1>
        
      </div>
    );
  }
  if(isError){
    return (
      <div className="App">
        <h1>Error...</h1>
        
      </div>
    );
  }
  
  return (
    <div className="App">
      <h1>{users[0].login}</h1>
      
    </div>
  );
}

export default App;
