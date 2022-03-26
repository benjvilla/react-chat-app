//import cecessary elements

import { NavLink, Routes, Route } from "react-router-dom";
import './styles/App.css';
import './styles/fonts.css'

//IMPORTANT
//DONT FORGET TO IMPORT OUR CHATBOX COMPONENT WHEN ITS COMPLETE
//IMPORTANT
import Chatbox from "./components/Chatbox";

function App() {

  return (
    <div className="App">
      <h1>Soapstone Messenger</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<Chatbox />} />
          <Route path="/" element={<Chatbox />} />
          <Route path="/" element={<Chatbox />} />
          <Route path="/" element={<Chatbox />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
