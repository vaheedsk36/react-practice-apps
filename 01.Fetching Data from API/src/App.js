import './App.css';
import {useState,useEffect} from 'react'
function App() {
  
  const [users,setUsers] = useState([]);
  const url = "https://api.github.com/users";
  const fetchData = async ()=>{
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  }


  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="App">
      <h1>
        Github Users Data Card
      </h1>
      <div className="car-collection">

      {
        users.map((user)=>{

          const {id,login,avatar_url} = user;
          
          return(
        
            

          <div className="card" key={id}>
        <ul className="user" >
          <li className="user-data">
            <img src={avatar_url} alt="" />
            <h3>{login}</h3>
            <p>
              Profile
            </p>

          </li>
        </ul>
      </div>

      
      )


        })
      }

      
    </div>
    </div>
  );
}

export default App;
