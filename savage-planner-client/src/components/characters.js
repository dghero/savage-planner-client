import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Navigation from './navigation';
import CharacterList from './character-list';
import Character from './character';

import {connect} from 'react-redux';
import requiresLogin from './requires-login';


class Characters extends Component {

  render() {
    return (
      <div>
        <Navigation currPage={'character'} />
        <main role="main">
          <Switch>
            <Route exact path="/characters" component={CharacterList}/>
            <Route exact path="/characters/:charId" component={Character}/>
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.character
});

export default requiresLogin()(connect(mapStateToProps)(Characters));