import {API_BASE_URL} from '../config';

export const fetchCharacterList = () => dispatch =>{
  return fetch(`${API_BASE_URL}/api/characters`)
    .then(res =>{
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(res =>{
      return dispatch(fetchCharacterListSuccess(res));
    })
    .catch(err =>{
      console.error( 'err: ', err);
      //
    });
};

export const newCharacter = () => dispatch =>{
  return fetch(`${API_BASE_URL}/api/characters`, {
    method: 'POST',
    headers: { 'content-type': 'application/json'}
  })
  .then(res =>{
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json(); //Doesn't seem I can get location from header...
  })
  .then(res =>{
    const id = res.id;
    console.log('id!?: ', id)
    dispatch(newCharacterSuccess(id));
    console.log(res);
  })
  .catch(err =>{
    console.error(err);
    dispatch(newCharacterError(err));
  });
};

export const fetchCharacter = id => dispatch =>{
  return fetch(`${API_BASE_URL}/api/characters/${id}`)
    .then(res =>{
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
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

export const updateName = name => (dispatch, getState) =>{
  const updateObj = {name};
  const id = getState().character.charId;

  return fetch(`${API_BASE_URL}/api/characters/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json'},
      body: JSON.stringify(updateObj)
  })
  .then(res =>{
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    dispatch(updateStateName(name));
  })
  .catch(err =>{
    console.error(err);
    //TODO: Action/reducer for failed call
  });
};

export const updateStarterAttr = (attr, val) => (dispatch, getState) =>{
  const updateObj = {initial: { attributes: {} }};
  const valFormatted = parseInt(val, 10);
  updateObj.initial.attributes[attr] = valFormatted;
  const id = getState().character.charId;
  
  //TODO: get ID directly from store
  return fetch(`${API_BASE_URL}/api/characters/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json'},
        body: JSON.stringify(updateObj)
    })
    .then(res =>{
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(updateStateStarterAttr(attr, valFormatted));
    })
    .catch(err =>{
      console.error(err);
      //TODO: Action/reducer for failed call
    });
};

export const updateStarterSkill = (skill, val) => (dispatch, getState) =>{
  const updateObj = {initial: { skills: {} }};
  const valFormatted = parseInt(val, 10);
  updateObj.initial.skills[skill] = {val: valFormatted};
  const id = getState().character.charId;

  //TODO: get ID directly from store
  return fetch(`${API_BASE_URL}/api/characters/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json'},
        body: JSON.stringify(updateObj)
    })
    .then(res =>{
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(updateStateStarterSkill(skill, valFormatted));
    })
    .catch(err =>{
      console.error(err);
      //TODO: Action/reducer for failed call
    });
};

export const updateAdvanceType = (xp, advType) => (dispatch, getState) =>{
  const updateObj = {advance:{}};
  const id = getState().character.charId;
  updateObj.advance = {
    xp,
    advType,
    val: null,
    val2: null,
    edgeId: null
  };

  return fetch(`${API_BASE_URL}/api/characters/${id}`, {
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

export const updateAdvanceValues = (xp, advType, val, val2, edgeId) => 
                                                (dispatch, getState) =>{
  const updateObj = {advance:{}};
  const id = getState().character.charId;
  updateObj.advance = {
    xp,
    advType,
    val: null,
    val2: null,
    edgeId: null
  };
  if(val === 'none') val = null;
  if(val2 === 'none') val2 = null;
  if(edgeId === 'none') edgeId = null;

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

  return fetch(`${API_BASE_URL}/api/characters/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json'},
      body: JSON.stringify(updateObj)
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    } 
    return res.json();
  })
  .then(res =>{
    const newEdge = res.advances[(xp/5)-1].edgeId;
    dispatch(updateStateAdvanceValues(xp, advType, val, val2, newEdge));
  })
  .catch(err =>{
    console.error(err);
    //TODO: Action/reducer for failed call
  });
};

export const FETCH_CHARACTER_LIST_SUCCESS = 'FETCH_CHARACTER_LIST_SUCCESS';
export const fetchCharacterListSuccess = list =>({
  type: FETCH_CHARACTER_LIST_SUCCESS,
  list
});

export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const fetchCharacterSuccess = character =>({
  type: FETCH_CHARACTER_SUCCESS,
  character
});

export const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR';
export const fetchCharacterError = error =>({
  type: FETCH_CHARACTER_ERROR,
  error
});

export const NEW_CHARACTER_SUCCESS = 'NEW_CHARACTER_SUCCESS';
export const newCharacterSuccess = charId =>({
  type: NEW_CHARACTER_SUCCESS,
  charId
});

export const NEW_CHARACTER_ERROR = 'NEW_CHARACTER_ERROR';
export const newCharacterError = error =>({
  type: NEW_CHARACTER_ERROR,
  error
});


export const SET_MAX_DISPLAY_XP = 'SET_MAX_DISPLAY_XP';
export const setMaxDisplayXp = maxXp =>({
  type: SET_MAX_DISPLAY_XP,
  maxXp
});

export const UPDATE_STATE_NAME = 'UPDATE_STATE_NAME';
export const updateStateName = name =>({
  type: UPDATE_STATE_NAME,
  name
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
  type: UPDATE_STATE_ADVANCE_VALUES,
  xp,
  advType,
  val,
  val2,
  edgeId
});



