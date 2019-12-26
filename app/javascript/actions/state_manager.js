import token from '../token'
import * as C from './constants'

export const loadInitialState = ()=>{
  const stateTracker = document.getElementById('state-tracker');
  const  gameState = JSON.parse(stateTracker.getAttribute('data-initial-game-state')).gameState
  return { 
    type: C.LOAD_INITIAL_STATE,
    gameState
  }
};
