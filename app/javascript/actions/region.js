import token from '../token'
import * as C from './constants'

export const turnPage = (id)=>{
  return (dispatch) => {
    dispatch({type: C.TURN_PAGE_REQUEST});
    return fetch(`api/page/turn.json?id=${id}`,{
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      method: 'post'
    }).then(response => response.json())
    .then(json => dispatch(turnPageSuccess(json)))
    .catch(error => dispatch(turnPageFailure()))
  }
};
export const turnPageSuccess = (response) => (
  { 
    type: C.API_REQUEST_SUCCESS,
    gameState: response.gameState
  }
);
export const turnPageFailure = () => (
  { 
    type: C.API_REQUEST_FAILURE
  }
);
