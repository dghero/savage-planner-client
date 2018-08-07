import {API_BASE_URL} from '../config';

export const FETCH_EDGES_SUCCESS = 'FETCH_EDGES_SUCCESS';
export const fetchEdgesSuccess = edges =>({
  type: FETCH_EDGES_SUCCESS,
  edges
});

export const FETCH_EDGES_ERROR = 'FETCH_EDGES_ERROR';
export const fetchEdgesError = error =>({
  type: FETCH_EDGES_SUCCESS,
  error
});

export const fetchEdges = () => dispatch =>{
  return fetch(`${API_BASE_URL}/api/edges`)
    .then(res =>{
      return res.json();
    })
    .then(res =>{
      console.log(res);
      return dispatch(fetchEdgesSuccess(res));
    })
    .catch(err =>{
      console.error('err: ', err);
      return dispatch(fetchEdgesError(err));
    });
};