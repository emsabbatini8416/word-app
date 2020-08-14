const initialState = {
    word: null,
  };
  
  const input = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_WORD':
        return {
          ...state,
          word: action.payload
        };
      default:
        return state;
    }
  };
  
  export default input;