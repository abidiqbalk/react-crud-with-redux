
import * as actionTypes from '../actions/actionTypes';

const initialState = {items:[]}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_ITEM:
      return {...state, items: [action.payload,...state.items]}
    case actionTypes.GET_ALL_ITEMS:
      return {...state,items:[...state.items,...action.payload]}  
    case actionTypes.DELETE_ITEM:
      return {...state,items:state.items.filter(item => item.id !== action.payload)}   
    case actionTypes.UPDATE_ITEM:
      let index = state.items.findIndex(x => x.id==action.payload.id)
      let newItems = state.items.filter((f) => f.id !== action.payload.id)
      newItems.splice(index, 0, action.payload)
      return {...state,items:newItems}      
    case actionTypes.SEARCH_ITEM:
      return {items:action.payload}  
    default:
      return state;
  }


}