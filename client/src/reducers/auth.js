import { AUTH, LOGOUT } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case AUTH: {
      localStorage.setItem(`profile`, JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    }

    case LOGOUT: {
      localStorage.removeItem(`profile`);
      return { ...state, authData: null };
    }

    default: {
      return state;
    }
  }
};
