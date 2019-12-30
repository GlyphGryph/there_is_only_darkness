import token from '../token'
import * as C from './constants'

export const selectChamber = (id)=>(
  { 
    type: C.SELECT_CHAMBER,
    selectedChamber: id
  }
);
