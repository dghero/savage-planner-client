import React from 'react';
import './navigation.css';

export default function Navigation(props){
  const page = props.currPage;
  
  return (
    <div className="menu">
      <nav>
        <ul className="menu-list">
          <li key="character" className="menu-list-item">
            <a href="/characters" className={page==='character' ? 'current-page' : null}>Characters</a>
          </li>
          <li key="edges" className="menu-list-item">
            <a href="/edges" className={page==='edges' ? 'current-page' : null}>Edges</a>
          </li>
          <li key="rules" className="menu-list-item">
            <a href="/rules" className={page==='rules' ? 'current-page' : null}>Rules</a>
          </li>
          <li key="login" className="menu-list-item">
            <a href="/index" className={page==='login' ? 'current-page' : null}>Login/Register</a>
          </li>
          <li key="logout" className="menu-list-item">
            <a href="/logout" className={page==='logout' ? 'current-page' : null}>Logout</a>
          </li>

        </ul>
        {/* <ul>
          
        </ul> */}
      </nav>
    </div>
  );
}