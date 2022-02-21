const initialState = {
  showName: false,
  name: "User",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE::SHOW_NAME_TOGGLE": {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    default:
      return state;
  }
};
