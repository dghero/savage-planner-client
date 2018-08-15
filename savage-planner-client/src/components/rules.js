import React from 'react';

import Navigation from './navigation';

import './rules.css';

export default function Rules(props){
  
  return (
    <div>
      <Navigation currPage={'rules'} />
      <main>
        <div className="rules">
          <h1>Character Creation Rules</h1>
          <p>
            Welcome to the Savage Worlds Character Builder!
            Savage Worlds is a Tabletop RPG system, of which the full
            ruleset is too extensive to list here. However, this
            rules page will provide the basic, bare bones rules 
            game mechanics and character creation.
          </p>
          
          <h2>General Information and Terminology</h2>
          <p>
            Tabletop RPG systems such as Savage Worlds are, as the name implies,
            typically played in-person around a table, with people bringing pencils,
            paper, and dice to keep track of character stats and the like. One person,
            called the Game Master (often shortened to GM) controls the world,
            describing scenes, controlling enemies, and acting out the roles of all the
            people the player party will meet. The number of players can vary greatly,
            but a typical party size is around four to six players.
          </p>
          <p>
            Savage Worlds is played using traditional sets of gaming dice:
            4-sided, 6-sided, 8-sided, 10-sided, and 12-sided dice are
            generally necessary to play. These are abbreviated to d4, d6
            d8, d10, and d12 respectively.
          </p>
          <p>
            When performing a difficult action,
            the player rolls the appropriate dice, adds the dice's values together,
            then adds any bonus/penalty modifiers to the total result. The total
            result must meet or exceed whatever target value is appropriate for
            the task at hand; in Savage Worlds, this target value is typically 4,
            unless the task is particularly easy or difficult.
          </p>
          <p>
            SOMETHING ABOUT MEETING TIMES, SESSIONS, AND XP
          </p>

          <h2>Character Attributes and Skills</h2>
          <p>
            Characters begin with two main categories of statistics: Attributes
            and Skills. The value of each statistic in both of these categories
            are expressed by die sizes. For instance, a character may have a d6
            of Strength as an attribute.
          </p>
          <p>
            Attributes represent a character's general qualities,
            which dictates their natural talent and aptitude for general
            tasks/abilities. The five attribures are Strength, Agility, Vigor,
            Smarts, and Spirit. The minimum die size for an attribute is a d4.
          </p>
          <p>
            Skills represent more specific talents that the character has learned.
            They are too numerous to list here, but examples of skills include
            Shooting, Stealth, and Intimidation. 
            All Skills begin untrained until a character has gone out of their way to 
            learn them; once trained, the Skill begins at a d4.
          </p>
          <p>
            Additionally, each Skill is associated with an
            attribute. For instance, Shooting requires a character to be precise
            and have a steady hand, so its associated attribute is Agility. Similarly,
            the Investigation skill requires knowing how to effectively decide
            what to look for and where to look, so it is associated with Smarts.
            When the value of a Skill begins exceeding the value of its associated Attribute, that
            skill becomes more difficult to upgrade.
          </p>

          <h2>Point Buy System</h2>
          <p>
            lorem ipsum, fool
          </p>
          <p>
            
          </p>
          <p>
            
          </p>
          
          <h2>Advances</h2>
          <p>Advances are complex and have a lot of nuance</p>
          <p>lorem ispum lorem ipsum etc etc</p>
        </div>
      </main>
    </div>
  );
}