const profileInfoInitialState = {
  infomationAccount: {}
};

const reducer = (state = profileInfoInitialState, action) => {
  switch (action.type) {
    case "PROFILE_INFO":
      // console.log("Ket noi PAG thanh cong!");
      console.log(action.username1);
      return {
        ...state,
        infomationAccount: action.username1
      };
    case "PROFILE_MENUPAG":
      // console.log(this.state.infomationAccount);
      console.log("Ket noi PAG thanh cong!");
      return {
        ...state
      };
    default:
      return state;
  }
};
export default reducer;
