//import necessary elements
import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import './styles/App.css';
import './styles/fonts.css';
import Praise from './img/praisethesun.gif';
import Chatbox from "./components/Chatbox";


function App() {
  return (
    <div id="layout-grid">
      <div className="App">
        <h1 id="head">Soapstone Messenger</h1>
        <div id="main">
          <div id="left">
            <nav id= "navbar">
              <h2>Dungeons</h2>
                <NavLink id="nav" to="/room1" >Room1</NavLink>
                <NavLink id="nav" to="/room2" >Room2</NavLink>
                <NavLink id="nav" to="/room3" >Room3</NavLink>
                <NavLink id="nav" to="/room4" >Room4</NavLink>
            </nav>
            <img id="praise" src={Praise} />
          </div>
          <section id="display">
            <Routes>
              <Route path="/:currentR" element={<Chatbox />} />
            </Routes>
          </section>
        </div>
      </div>
    </div>
  );
}


export default App;
