const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:

      return {
              ...state,
              ...action.data,
              isAuth: true
            }

    default:
      return state;
  }
}

export const setAuthUserData = (id, email, login) => {
  return {
    type: SET_USER_DATA, date: {id, email, login}
  }
}

export default authReducer;
