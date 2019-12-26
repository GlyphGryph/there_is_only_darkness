import token from '../token'
import * as C from './constants'

export const selectActivity = (id)=>{
  return (dispatch) => {
    dispatch({type: C.SELECT_ACTIVITY_REQUEST});
    return fetch(`api/activity/select.json?id=${id}`,{
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      method: 'post'
    }).then(response => response.json())
    .then(json => dispatch(selectActivitySuccess(json)))
    .catch(error => dispatch(selectActivityFailure()))
  }
};
export const selectActivitySuccess = (response) => (
  { 
    type: C.API_REQUEST_SUCCESS,
    gameState: response.gameState
  }
);
export const selectActivityFailure = () => (
  { 
    type: C.API_REQUEST_FAILURE
  }
);
