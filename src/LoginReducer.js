import * as ACT from './ACTIONSL.js';

let LoginState = {
  token: null,
  id: null,
  photo: null,
  email: null,
  name: null,
  error: null,
  loading: false,
};

let LoginReducer = (state = LoginState, action) => {
  switch (action.type) {
    case ACT.START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ACT.SUCCES:
      return {
        ...state,
        token: action.payload.token,
        id: action.payload.id,
        loading: false,
        error: null,
      };
    case ACT.FAILED:
      return {
        ...state,
        error: action.payload.data,
        loading: false,
      };
    case ACT.LOGOUT:
      return {
        ...state,
        token: null,
        id: null,
        photo: null,
        name: null,
        error: null,
        loading: false,
      };
    case 'UPDATE':
      return Object.assign({}, state, {
        photo: action.payload.photo,
        name: action.payload.name,
        email: action.payload.email,
      });
    default:
      break;
  }
  return state;
};

export default LoginReducer;
