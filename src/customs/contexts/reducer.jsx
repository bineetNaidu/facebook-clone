export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USET: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USET:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
