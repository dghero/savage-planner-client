import React from 'react';
import {connect} from 'react-redux';

import './navigation.css';

export  function Navigation(props){
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
          {
            props.loggedIn 
              ? <li key="logout" className="menu-list-item">
                <a href="/logout" className={page==='logout' ? 'current-page' : null}>Logout</a>
              </li>
              : <li key="login" className="menu-list-item">
                  <a href="/index" className={page==='login' ? 'current-page' : null}>Login/Register</a>
                </li>
          }
          
          

        </ul>
        {/* <ul>
          
        </ul> */}
      </nav>
    </div>
  );
}

const mapStateToProps = state => { 
  return {
    // auth: state.auth,
    // hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(Navigation);