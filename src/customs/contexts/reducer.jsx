export const initialState = {
  user: null,
  isDarkMode: true,
};

export const actionTypes = {
  SET_USET: 'SET_USER',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USET:
      return {
        ...state,
        user: action.user,
      };

    case 'SET_MODE':
      return {
        isDarkMode: action.mode,
      };

    default:
      return state;
  }
};
export default reducer;
