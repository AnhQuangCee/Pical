const profileInfoInitialState = {
  usernameAccount: ""
};
const reducer = (state = profileInfoInitialState, action) => {
  switch (action.type) {
    case "PROFILE_INFO":
      console.log(JSON.stringify(action.getItem));
      break;
    default:
      return state;
  }
};
