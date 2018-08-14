import{
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR,
  SET_MAX_DISPLAY_XP,
  UPDATE_STATE_STARTER_ATTR,
  UPDATE_STATE_STARTER_SKILL,
  UPDATE_STATE_ADVANCE_TYPE,
  UPDATE_STATE_ADVANCE_VALUES

} from '../actions/char';

const initialState = {
  stats: {},
  isLoaded: false,
  charError: null,
  maxXp: 75
};

export function characterReducer(state=initialState, action){
  let newStats = {...state.stats};
  let xpIndex;
  switch(action.type){
    case FETCH_CHARACTER_SUCCESS:
      return {...state,
              isLoaded: true,
              stats: action.character};

    case FETCH_CHARACTER_ERROR:
      return {...state,
              charError: action.error};

    case SET_MAX_DISPLAY_XP:
        return{...state,
              maxXp: action.maxXp}

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

    case UPDATE_STATE_ADVANCE_TYPE:
      xpIndex = action.xp/5 - 1;
      newStats.advances[xpIndex] = {
        xp: action.xp,
        advType: action.advType,
        val: null,
        val2: null,
        edgeId: null
      }
      return {...state,
        stats: newStats
      }
    
    case UPDATE_STATE_ADVANCE_VALUES:
      xpIndex = action.xp/5 - 1;
      newStats.advances[xpIndex] = {
        xp: action.xp,
        advType: action.advType,
        val: action.val,
        val2: action.val2,
        edgeId: action.edgeId
      }
      return {...state,
        stats: newStats
      }

    default:
      return state;
  }
}