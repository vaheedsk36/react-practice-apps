import "./App.css";
import Modal from "./components/Modal";
import {useState} from 'react';

function App() {

  const [show,setShow] = useState(false);

  const showFn = ()=>{

    setShow(true);

  }

  const closeFn = ()=>{

    setShow(false);

  }

  return (
    <div className="App">
      <button type="submit" className="modalBtn" style={{ marginTop: "5rem" }} onClick={showFn}>
        Open Modal
      </button>
      <p className="modalPara" style={{ marginTop: "5rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex dolor
        deserunt necessitatibus suscipit dolore optio ut veniam amet! Velit odit
        consequuntur minima dolore ad esse repellat, dolor sequi vel laborum et.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex dolor
        deserunt necessitatibus suscipit dolore optio ut veniam amet! Velit odit
        consequuntur minima dolore ad esse repellat, dolor sequi vel laborum et.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex dolor
        deserunt necessitatibus suscipit dolore optio ut veniam amet! Velit odit
        consequuntur minima dolore ad esse repellat, dolor sequi vel laborum et.
      </p>
      
      <Modal show={show} close={closeFn}></Modal>
    </div>
  );
}

export default App;
