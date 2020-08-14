import axios from "axios";

export const SET_WORD = 'SET_WORD';

export const setWord = (data) => {
  return {
      type: SET_WORD,
      payload: data
  }
}

export const doSetWord = ({ word }) => {
    return dispatch => {    
        return axios.post('http://localhost:5000/api/v1/word', { word })
        .then(res => {
            dispatch(setWord(res.data.data));
        })    
        .catch(error => {
            throw(error);
        })
    }
}