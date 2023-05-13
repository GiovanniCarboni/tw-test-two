import { createSlice } from "@reduxjs/toolkit";

const initState = () => {
  const session = JSON.parse(localStorage.getItem("session"));
  return session
    ? session
    : {
        isLoggedIn: false,
        email: null,
        type: null,
        error: null,
      };
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState(),
  reducers: {
    error: (state, action) => {
      state.error = action.payload.error;
    },
    login: (state, action) => ({
      isLoggedIn: true,
      email: action.payload.email,
      type: action.payload.type,
      error: null,
    }),
    logout: (state) => ({
      isLoggedIn: false,
      email: null,
      type: null,
      error: null,
    }),
  },
});

export const authActions = authSlice.actions;

export const authenticate = (email, password) => async (dispatch) => {
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((user) => user.email === email);

  const checkUser = (email, password) => {
    return new Promise((resolve, reject) => {
      if (!user || user.password !== password)
        reject("Incorrect user or password");
      else resolve(email);
    });
  };
  try {
    const validEmail = await checkUser(email, password);
    dispatch(authActions.login({ email: validEmail, type: user.type }));
  } catch (error) {
    dispatch(authActions.error({ error }));
  }
};

export const register = (email, password) => (dispatch) => {
  const users = JSON.parse(localStorage.getItem("users"));

  if (users.find((user) => user.email === email)) {
    dispatch(authActions.error({ error: "User already exists" }));
    return;
  }

  const newUser = { email, password, type: "user" };

  localStorage.setItem("users", JSON.stringify([...users, newUser]));
  dispatch(authActions.login({ email: newUser.email, type: newUser.type }));
};

export default authSlice.reducer;
