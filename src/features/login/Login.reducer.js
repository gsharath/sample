
const initialState = {
  loginInfo:null,
};

export function LoginReducer(storeState = initialState, action) {
  switch (action.type) {
    case 'EVENT_RESET_LOGIN_INFO':
      return initialState;
    case 'EVENT_SET_LOGIN_INFO':
      return { ...storeState, loginInfo: action.loginInfo };
    default:
      return storeState;
  }
};