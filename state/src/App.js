import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [person, setperson] = useState({name:"ekram", age:"27",    
  imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"})
  const [show, setshow] = useState(false)

  return (
    <div className="App">
    <button onClick={()=>setshow(!show)}>click to show profile</button>
  
  {show?
    <div>
    <img src={person.imageSrc} width="300px" />
    <h1>{person.name}</h1>
  <h2> j ai {person.age} ans</h2>
    </div>:null
  }

    </div>
  );
}

export default App;
