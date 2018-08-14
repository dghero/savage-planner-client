import React from 'react';
import './navigation.css';

export default function Navigation(props){
  const page = props.currPage;
  
  return (
    <div className="menu">
      <nav>
        <ul className="menu-list">
          <li key="character" className="menu-list-item">
            <a href="/character" className={page==='character' ? 'current-page' : null}>Character</a>
          </li>
          <li key="edges" className="menu-list-item">
            <a href="/edges" className={page==='edges' ? 'current-page' : null}>Edges</a>
          </li>
          <li key="rules" className="menu-list-item">
            <a href="/rules" className={page==='rules' ? 'current-page' : null}>Rules</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}