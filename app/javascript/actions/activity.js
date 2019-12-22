import token from '../token'
export const SELECT_ACTIVITY_REQUEST = "SELECT_ACTIVITY_REQUEST";
export const SELECT_ACTIVITY_SUCCESS = "SELECT_ACTIVITY_SUCCESS";
export const SELECT_ACTIVITY_FAILURE = "SELECT_ACTIVITY_FAILURE";

export const selectActivity = (id)=>{
  return (dispatch) => {
    dispatch({type: SELECT_ACTIVITY_REQUEST});
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
    type: SELECT_ACTIVITY_SUCCESS,
    gameState: response.gameState
  }
);
export const selectActivityFailure = () => (
  { 
    type: SELECT_ACTIVITY_FAILURE
  }
);
