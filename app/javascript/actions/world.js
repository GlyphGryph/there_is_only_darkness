import token from '../token'
export const CREATE_WORLD_REQUEST = "CREATE_WORLD_REQUEST";
export const CREATE_WORLD_SUCCESS = "CREATE_WORLD_SUCCESS";
export const CREATE_WORLD_FAILURE = "CREATE_WORLD_FAILURE";
export const DESTROY_WORLD_REQUEST = "DESTROY_WORLD_REQUEST";
export const DESTROY_WORLD_SUCCESS = "DESTROY_WORLD_SUCCESS";
export const DESTROY_WORLD_FAILURE = "DESTROY_WORLD_FAILURE";

export const createWorld = ()=>{
  return (dispatch) => {
    dispatch({type: CREATE_WORLD_REQUEST});
    return fetch(`api/world/create.json`,{
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      method: 'post'
    }).then(response => response.json())
    .then(json => dispatch(createWorldSuccess(json)))
    .catch(error => dispatch(createWorld(json)))
  }
};
export const createWorldSuccess = (response) => (
  { 
    type: CREATE_WORLD_SUCCESS,
    gameState: response.gameState
  }
);
export const createWorldFailure = (response) => (
  { 
    type: CREATE_WORLD_FAILURE,
    gameState: response.gameState
  }
);

export const destroyWorld = ()=>{
  return (dispatch) => {
    dispatch({type: DESTROY_WORLD_REQUEST});
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
    type: DESTROY_WORLD_SUCCESS,
    gameState: response.gameState
  }
);
export const destroyWorldFailure = (response) => (
  { 
    type: DESTROY_WORLD_FAILURE,
    gameState: response.gameState
  }
);
