import token from '../token'
import * as C from './constants'

export const selectActivity = (id)=>{
  return (dispatch) => {
    // Heart is a special psuedo-action that just changes the view
    if('heart'==id){
      dispatch(switchToView('heart'));
    }else{
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
      .catch(error => dispatch(selectActivityFailure()));
    }
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
export const switchToView = (view) => (
  { 
    type: C.SWITCH_TO_VIEW,
    view
  }
);
