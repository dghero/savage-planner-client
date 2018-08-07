import{
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR,
  UPDATE_STATE_STARTER_ATTR,
  UPDATE_STATE_STARTER_SKILL

} from '../actions/char';

const initialState = {
  stats: {},
  charError: null
};

export function characterReducer(state=initialState, action){
  let newStats = {...state.stats};
  console.log('newStats: ', newStats);
  switch(action.type){
    case FETCH_CHARACTER_SUCCESS:
      return {...state,
              stats: action.character};

    case FETCH_CHARACTER_ERROR:
      return {...state,
              error: action.error};

    case UPDATE_STATE_STARTER_ATTR:
      newStats.initial.attributes[action.attr] = action.val;
      return {...state,
        stats: newStats
      }

    case UPDATE_STATE_STARTER_SKILL:
      newStats.initial.skills[action.skill].val = action.val;
      return {...state,
        stats: newStats
      }

    default:
      return state;
  }
}