
# Savage Planner
## A Savage Worlds Character Builder

Savage Planner is a character builder app for the Tabletop RPG system, Savage Worlds. It allows users to create multiple characters, modify their starting statistics, and choose their abilities/upgrades for each level-up. If any option selection is in violation of Savage World's character building rules, the app will notify them what selection is invalid and why.

A more robust explanation of character building rules is included in the app's Rules page.

## Live Application

A live version of the app may be found here: https://savage-planner-client.herokuapp.com/index

The following dummy account credentials are available for testing purposes:
```
Username: user1
Password: password
```

## Screenshots
### Login/Registration
Allows the user login or create a new account.

<img width="400" alt="login-reg" src="https://raw.githubusercontent.com/dghero/savage-planner-client/master/screenshots/login-reg.png" />

### Character List
The page listing all the user's characters, and the place to create new characters

<img width="400" alt="char-list" src="https://raw.githubusercontent.com/dghero/savage-planner-client/master/screenshots/char-list.png" />

### Character Editor
The page to modify an existing character

<img width="400" alt="char-1" src="https://raw.githubusercontent.com/dghero/savage-planner-client/master/screenshots/char-1.png" />
<img width="400" alt="char-2" src="https://raw.githubusercontent.com/dghero/savage-planner-client/master/screenshots/char-2.png" />
<img width="400" alt="char-3" src="https://raw.githubusercontent.com/dghero/savage-planner-client/master/screenshots/char-3.png" />

### Rules
A basic, bare-bones overview of the Savage Worlds Tabletop RPG System, and the rules for character creation.

<img width="400" alt="rules" src="https://raw.githubusercontent.com/dghero/savage-planner-client/master/screenshots/rules.png" />

### Edge List
A reference for the special abilities (called "Edges") the user can add to their character

<img width="400" alt="edge-list" src="https://raw.githubusercontent.com/dghero/savage-planner-client/master/screenshots/edge-list.png" />


## Tech Stack
### Front End
* This app uses react, redux, react-redux, and thunk for client-generation and state management.
* react-router-dom is implemented for route switching and redirection.
* JWT tokens and localstorage are implemented for authentication and login session management.

### Back End
* The server implements node with a mongoose database.
* For authentication, it uses passport, passport-local, and passport-jwt,

## Key Components
* App.js is the root component
* login-register.js is the landing page, and allows for user login/registration
* character-list.js manages the user's list of characters 
* character.js manages the Character Editor.
* rules.js provides the overview for basic game information and character building rules
* edges.js provides the list of special abilities that can be gained during character creation
* logout.js allows the user to log out
* navigation.js allows user to navigate the site
