import React from 'react';

import Navigation from './navigation';

export default function Rules(props){
  
  return (
    <div>
      <Navigation currPage={'rules'} />
      <main>
        <div className="rules">
          <h2>Character Creation Rules</h2>
          <p>Point buy is a thing you do for skills an attributes</p>
          <p>Advances are complex and have a lot of nuance</p>
          <p>lorem ispum lorem ipsum etc etc</p>
        </div>
      </main>
    </div>
  );
}