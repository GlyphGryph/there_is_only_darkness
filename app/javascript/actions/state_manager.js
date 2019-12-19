import token from '../token'
export const LOAD_INITIAL_STATE = "LOAD_INITIAL_STATE";

export const loadInitialState = ()=>{
  const stateTracker = document.getElementById('state-tracker');
  const  gameState = JSON.parse(stateTracker.getAttribute('data-initial-game-state')).gameState
  return { 
    type: LOAD_INITIAL_STATE,
    gameState
  }
};
