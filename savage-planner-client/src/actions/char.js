import {API_BASE_URL} from '../config';


export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const fetchCharacterSuccess = character =>({
  type: FETCH_CHARACTER_SUCCESS,
  character
});

export const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR';
export const fetchCharacterError = error =>({
  type: FETCH_CHARACTER_SUCCESS,
  error
});

export const fetchCharacter = id => dispatch =>{
  return fetch(`${API_BASE_URL}/api/characters/${id}`)
    .then(res =>{
      return res.json();
    })
    .then(res =>{
      return dispatch(fetchCharacterSuccess(res));
    })
    .catch(err =>{
      console.error('err: ', err);
      return dispatch(fetchCharacterError(err));
    });
};

export const SET_STARTER_ATTR = 'SET_STARTER_ATTR';
export const setStarterAttr = attribute =>({
  type: SET_STARTER_ATTR,
  attribute
});

export const SET_STARTER_SKILL = 'SET_STARTER_SKILL';
export const setStarterSkill = skill =>({
  type: SET_STARTER_SKILL,
  skill
});



