import React, { Component } from 'react';

import Navigation from './navigation';
import CharacterList from './character-list';
import Character from './character';

import {connect} from 'react-redux';

import Junk from './junk';

import {Route, Switch} from 'react-router-dom';

import './characters.css';

class Characters extends Component {

  render() {
    return (
      <div>
        <Navigation currPage={'character'} />
        <main>
          <Switch>
            <Route exact path="/character" component={CharacterList}/>
            <Route exact path="/character/:charId" component={Character}/>
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(Characters);