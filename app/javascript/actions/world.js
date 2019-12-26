import token from '../token'
import * as C from './constants'

export const createWorld = ()=>{
  return (dispatch) => {
    dispatch({type: C.CREATE_WORLD_REQUEST});
    return fetch(`api/world/create.json`,{
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      method: 'post'
    }).then(response => response.json())
    .then(json => dispatch(createWorldSuccess(json)))
    .catch(error => dispatch(createWorld()))
  }
};
export const createWorldSuccess = (response) => (
  { 
    type: C.API_REQUEST_SUCCESS,
    gameState: response.gameState
  }
);
export const createWorldFailure = () => (
  { 
    type: C.API_REQUEST_FAILURE
  }
);

export const destroyWorld = ()=>{
  return (dispatch) => {
    dispatch({type: C.DESTROY_WORLD_REQUEST});
    return fetch(`api/world/destroy.json`,{
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      method: 'post'
    }).then(response => response.json())
    .then(json => dispatch(destroyWorldSuccess(json)))
    .catch(error => dispatch(destroyWorld(json)))
  }
};
export const destroyWorldSuccess = (response) => (
  { 
    type: C.API_REQUEST_SUCCESS,
    gameState: response.gameState
  }
);
export const destroyWorldFailure = () => (
  { 
    type: C.API_REQUEST_FAILURE
  }
);
