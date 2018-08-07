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

export const updateStarterAttr = (attr, val) => dispatch =>{
  //connect to db and PUT character.initial.attributes[attr].val
  
  const updateObj = {initial: { attributes: {} }};
  updateObj.initial.attributes[attr] = {val: val};

  console.log('updateObj: ', updateObj);
  //get ID directly from store
  return fetch(`${API_BASE_URL}/api/characters/5b64b162560e648424b32a61`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
        body: JSON.stringify(updateObj)
    })
    .then(res =>{
      dispatch(updateStateStarterAttr(attr, val));
    })
    .catch(err =>{
      console.error(err);
    }) ;
  
};

export const updateStarterSkill = (skill, val) => dispatch =>{
  //connect to db and PUT character.initial.skills[skill].val
  dispatch(updateStateStarterSkill(skill, val));
};


export const UPDATE_STATE_STARTER_ATTR = 'UPDATE_STATE_STARTER_ATTR';
export const updateStateStarterAttr = (attr, val) =>({
  type: UPDATE_STATE_STARTER_ATTR,
  attr,
  val
});

export const UPDATE_STATE_STARTER_SKILL = 'UPDATE_STATE_STARTER_SKILL';
export const updateStateStarterSkill = (skill, val) =>({
  type: UPDATE_STATE_STARTER_SKILL,
  skill,
  val
});



