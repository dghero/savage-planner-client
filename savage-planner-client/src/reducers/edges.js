import{
  FETCH_EDGES_SUCCESS,
  FETCH_EDGES_ERROR

} from '../actions/edges';

const initialState = {
  list: [],
  isLoaded: false,
  edgeError: null
};

export function edgeReducer(state=initialState, action){
  switch(action.type){
    case FETCH_EDGES_SUCCESS:
      return {...state,
              isLoaded: true,
              list: action.edges};
    case FETCH_EDGES_ERROR:
      return {...state,
              edgeError: action.error};
    default:
      return state;
  }
}