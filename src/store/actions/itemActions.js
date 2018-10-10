import * as actionTypes from './actionTypes';
import client from "./index"
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const createItem = (data) => {
    return dispatch => axios.post('http://localhost:5000/api/v1/items',data)
      .then((res) => {
        dispatch({type: actionTypes.CREATE_NEW_ITEM, payload: res.data});
      })
      .catch(error => {
            Object.keys(error.response.data).forEach(function (key) {
                var value = error.response.data[key]
                toast.error(key + " "+ value[0]);
            })
        })
}
export const getAllItems = () => {
    return dispatch => axios.get('http://localhost:5000/api/v1/items')
      .then((res) => {
        dispatch({type: actionTypes.GET_ALL_ITEMS, payload: res.data});
      });
}
export const deleteItem = (id) => {
    return dispatch => axios.delete(`http://localhost:5000/api/v1/items/${id}`)
      .then((res) => {
        dispatch({type: actionTypes.DELETE_ITEM, payload: id});
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const updateItem = (data) => {
    return dispatch => axios.put(`http://localhost:5000/api/v1/items/${data.id}`,data)
      .then((res) => {
        dispatch({type: actionTypes.UPDATE_ITEM, payload: res.data});
      })
      .catch(error => {
            Object.keys(error.response.data).forEach(function (key) {
                var value = error.response.data[key]
                toast.error(key + " "+ value[0]);
            })
        })
      
}
export const searchItems = (query) => {
  const params={
    "q":{"name_cont":query}
  }
  return dispatch => axios.get('http://localhost:5000/api/v1/items?q',{params})
    .then((res) => {
      dispatch({type: actionTypes.SEARCH_ITEM, payload: res.data});
    });
}
