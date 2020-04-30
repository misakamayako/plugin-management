const baseStore = {
  userInfo: {
    userId: 0,
    userName: "",
    avatar: ""
  }
};

function userInfo(state = baseStore, action) {
  switch (action.type) {
    case "setUser":
      return state.userInfo = action.payload;
    default:
      return state;
  }
}

export default userInfo;
