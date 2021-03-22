const initialState = {
    vegetablesList: []
};
function vegetablesReducer(state = initialState, action) {
     
    switch (action.type) {
        case 'ADD_VEGETABLES':
             return { ...state, vegetablesList:[...state.vegetablesList, action.payload] }
          default:          
        return state;
    }
  };
  export default vegetablesReducer;