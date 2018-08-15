import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_SET_WARNING
} from '../actions/auth';

const initialState = {
  authToken: null, // if this is assigned, it doesn't mean it's validated
  currentUser: null,
  loading: false,
  error: null,
  warning: false
};

export function authReducer(state=initialState, action){
  switch(action.type){

    case SET_AUTH_TOKEN:
      return {...state,
              authToken: action.authToken
      };

    case CLEAR_AUTH:
      return {...state,
              authToken: null,
              currentUser: null
      }

    case AUTH_REQUEST:
      return {...state,
        loading: true,
        error: null
      }

    case AUTH_SUCCESS:
      return {...state,
        loading: false,
        currentUser: action.currentUser
      }

    case AUTH_ERROR:
      return {...state,
        loading: false,
        error: action.error
      }

    case AUTH_SET_WARNING:
      return {...state,
        warning: action.warning
      }

    default:
      return state;
  }

}