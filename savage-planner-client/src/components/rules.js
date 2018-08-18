import React from 'react';

import Navigation from './navigation';

import './rules.css';

export default function Rules(props){
  
  return (
    <div>
      <Navigation currPage={'rules'} />
      <main role="main">
        <div className="rules">
          <h1>Character Creation Rules</h1>
          <p>
            Welcome to Savage Planner, the Savage Worlds Character Builder!
            Savage Worlds is a Tabletop RPG system, similar
            to Dungeons and Dragons.
            The full
            ruleset is too extensive to list here, but this
            page will provide the bare bones rules 
            for basic character creation.
          </p>
          
          <h2>General Information and Terminology</h2>
          <p>
            Tabletop RPG systems such as Savage Worlds are, as the name implies,
            typically played in-person around a table, with people bringing pencils,
            paper, and dice to keep track of character stats and the like. One person,
            called the Game Master (often shortened to GM) controls the world,
            describing scenes, controlling enemies, and acting out the roles of all the
            people the player party will meet. The players will interact with the world,
            describing what they want to do and say to accomplish their quests and goals.
            The number of players can vary greatly,
            but a typical party size is around four to six players.
          </p>
          <p>
            Savage Worlds is played using traditional sets of gaming dice:
            4-sided, 6-sided, 8-sided, 10-sided, and 12-sided dice are
            standard for play. These are abbreviated to d4, d6
            d8, d10, and d12 respectively. The d20, while an essential standard for 
            many tabletop games like Dungeons and Dragons, is not often seen in Savage Worlds.
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
            Story is important for Savage Worlds, both in the plot hook that the GM provides
            the players, and the stories made by the players themselves as they interact
            with the world. It's often impossible to tell the whole story in one sitting,
            so groups will block out regular times to meet up and play. A typical arrangement
            is to schedule 4-6 hour play sessions once every one or two weeks, or possibly once a month,
            if schedules are tight. As the players progress through the story and accomplish
            tasks, they earn experience points (XP). Gaining enough XP allows the player characters to
            increase their statistics and gain new abilities.
          </p>

          <h2>Character Attributes and Skills</h2>
          <p>
            Characters begin with two main categories of statistics: Attributes
            and Skills. The value of each statistic in both of these categories
            are expressed by die sizes. For instance, a character may have a d6
            of Strength as an attribute, or a d8 of Healing as a skill.
          </p>
            <h3>Attributes</h3>
            <p>
              Attributes represent a character's general qualities,
              which dictates their natural talent and aptitude for general
              tasks/abilities. The five attribures are Strength, Agility, Vigor,
              Smarts, and Spirit. The minimum die size for an attribute is a d4.
            </p>
            <h3>Skills</h3>
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

          <h2>Starting Statistics</h2>
          <p>
            Selecting a character's starting statistics is simple process based on a point-buy system.
          </p>
          <h3>Starting Attributes</h3>
            <p>
              For Attributes, every attribute starts at d4, and you are given 5 attribute points to allocate between
              them. One point spent will increase the attribute's die size by one step (i.e. from d4 to d6, 
              from d6 to d8, etc). You can allocate these points in any combination you wish, so long as
              a starting atttribute doesn't exceed d12.
            </p>
          <h3>Starting Skills</h3>
            <p>
              For skills, every skill begins untrained, and you are given 15 skill points to allocate between them.
              Training a skill to d4 costs one point. If a skill is below its associated attribute, you may
              spend one point to increase the skill's die size by one step. If the skill's die size is greater
              than or equal to its associated attribute, it instead costs two points to increase the skill by
              one die step. 
            </p>
            <p>
              For example, the Notice skill is linked to Smarts. If Smarts is d8, upgrading
              Notice from d6 to d8 would cost one skill point. Upgrading it again from d8 to d10 would cost two points,
              and from d10 to d12 would cost another two points. Like attributes, points can be allocated in any
              combination you wish, so long as a starting skill doesn't exceed d12.
            </p>
          
          <h2>Leveling Up and Advances</h2>
          <p>
            As players progress, their characters earn XP, which acts as a way to track their adventuring expertise
            and general prowess. Typically, characters earn 2-3 XP per play session, unless the players made an
            exceptionally large or exceptionally small amount of progress that day.
          </p>
            <h3>Ranks</h3>
            <p>
              Characters are assigned a Rank depending on how much XP they've earned. Ranks are an easy way to categorize
              how generally powerful a character is, and acts as a limit on certain abilities the character can learn.
              The ranks are as follows:
            </p>
            <div className="rank-container">
              <div className="ranks">
                <span className="ranks--xp">0-19XP:</span> <span className="ranks--name">Novice</span>
                <span className="ranks--xp">20-39XP:</span> <span className="ranks--name">Seasoned</span>
                <span className="ranks--xp">40-59XP:</span> <span className="ranks--name">Veteran</span>
                <span className="ranks--xp">60-79XP:</span> <span className="ranks--name">Heroic</span>
              </div>
            </div>
            <h3>Advances</h3>
            <p>
              For every 5 XP earned, the character earns something called an Advance. An Advance
              is a small increase in power, and can be spent in one of several ways: increasing attributes,
              increasing skills, or gaining special abilities called Edges. If increasing an attribute or skill
              would push its die size beyond a d12, it stays at d12 and gains a +1 bonus modifier instead.
            </p>
              <h4>Increasing Attributes</h4>
              <p>An advance may be spent to increase an attribute's die size by one step. However, this may
                only be done once per rank. For example, if a character increased their Strength attribute at
                5XP, they would not be allowed to increase their Spirit attribute at 10XP, and would instead have to
                wait for their 20XP advance.
              </p>
              <p>
                However, you do not miss out on your potential attribute increase for
                a given rank if you do not take it within the XP range of that rank. For example, your first, second,
                and third attribute increases could be taken at 40XP, 45XP, and 50XP, but you would be unable to take
                a fourth attribute increase at 55XP.
              </p>
              <h4>Increasing Skills</h4>
              <p>
                An advance may be spent to increase skills' die sizes by one step. The number of skills you can increase
                per advance depends on the desired skills, their current die sizes, and the die sizes of their associated
                attributes.
              </p>
              <p>
                If a skill is untrained, you can spend the advance to gain training in the skill, setting its die size to d4.
              </p>
              <p>
                If a skill's die size currently equals or exceeds that of its associated attribute, you can spend the advance
                to increase the skill's die size by one step.
              </p>
              <p>
                If there are two skills with dice values that are below that of their associated attributes, you can spend the advance
                to increease both skills' die size by one step. When increasing two skills for an advance, two unique skills must be
                selected.
              </p>
              <h4>Gaining Edges</h4>
              <p>
                An advance may be spent to gain a single Edge, which can grant a wide variety of potential benefits. An edge
                might grant a static number bonuses to roll results under special circumstances, increase the character's
                running speed, grant them extra attacks, allow them to ignore certain penalties, or even learn to cast new spells.
              </p>
              <p>
                A given edge can have a wide variety of pre-requisites before a character is allowed to take it. The edge
                may require that they be a certain rank, have minimum die sizes for certain attributes or skills, or have
                previously obtained other edges.
              </p>
              <p>
                For a list of available edges, please see the Edges page.
              </p>
        </div>
      </main>
    </div>
  );
}