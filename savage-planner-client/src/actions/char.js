import {API_BASE_URL} from '../config';


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
  const updateObj = {initial: { attributes: {} }};
  updateObj.initial.attributes[attr] = parseInt(val, 10);

  //TODO: get ID directly from store
  return fetch(`${API_BASE_URL}/api/characters/5b64b162560e648424b32a61`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json'},
        body: JSON.stringify(updateObj)
    })
    .then(res =>{
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(updateStateStarterAttr(attr, val));
    })
    .catch(err =>{
      console.error(err);
      //TODO: Action/reducer for failed call
    });
};

export const updateStarterSkill = (skill, val) => dispatch =>{
  const updateObj = {initial: { skills: {} }};
  updateObj.initial.skills[skill] = {val: parseInt(val, 10)};

  //TODO: get ID directly from store
  return fetch(`${API_BASE_URL}/api/characters/5b64b162560e648424b32a61`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json'},
        body: JSON.stringify(updateObj)
    })
    .then(res =>{
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(updateStateStarterSkill(skill, val));
    })
    .catch(err =>{
      console.error(err);
      //TODO: Action/reducer for failed call
    });
};

export const updateAdvanceType = (xp, advType) => dispatch =>{
  const updateObj = {advance:{}};
  updateObj.advance = {
    xp,
    advType,
    val: null,
    val2: null,
    edgeId: null
  };

  return fetch(`${API_BASE_URL}/api/characters/5b64b162560e648424b32a61`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json'},
      body: JSON.stringify(updateObj)
  })
  .then(res =>{
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }  
    dispatch(updateStateAdvanceType(xp, advType));
  })
  .catch(err =>{
    console.error(err);
    //TODO: Action/reducer for failed call
  });
};

export const updateAdvanceValues = (xp, advType, val, val2, edgeId) => dispatch =>{
  const updateObj = {advance:{}};
  updateObj.advance = {
    xp,
    advType,
    val: null,
    val2: null,
    edgeId: null
  };

  switch(advType){
    case 'edge': updateObj.advance.edgeId = edgeId; break;
    case 'attr': updateObj.advance.val = val; break;
    case 'newskill': updateObj.advance.val = val; break;
    case '1skill': updateObj.advance.val = val; break;
    case '2skills':
        updateObj.advance.val = val;
        updateObj.advance.val2 = val2;
        break;
    default:
      console.error('invalid type in updateAdvanceValues');
      //TODO: error something? Maybe?
  }

  return fetch(`${API_BASE_URL}/api/characters/5b64b162560e648424b32a61`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json'},
      body: JSON.stringify(updateObj)
  })
  .then(res =>{
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }  
    dispatch(updateStateAdvanceValues(xp, advType, val, val2, edgeId));
  })
  .catch(err =>{
    console.error(err);
    //TODO: Action/reducer for failed call
  });
};

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

export const UPDATE_STATE_ADVANCE_TYPE = 'UPDATE_STATE_ADVANCE_TYPE';
export const updateStateAdvanceType = (xp, advType) =>({
  type: UPDATE_STATE_ADVANCE_TYPE,
  xp,
  advType
});

export const UPDATE_STATE_ADVANCE_VALUES = 'UPDATE_STATE_ADVANCE_VALUES';
export const updateStateAdvanceValues = (xp, advType, val, val2, edgeId) =>({
  type: UPDATE_STATE_ADVANCE_TYPE,
  xp,
  advType,
  val,
  val2,
  edgeId
});



