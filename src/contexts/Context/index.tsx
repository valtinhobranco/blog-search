import { createContext, useReducer } from "react";

// ? reducers

import {
  userInitialState,
  userReducer,
  userType,
} from "../../reducers/userReducer";

import {
  themeType,
  themeInitialState,
  themeReducer,
} from "../../reducers/themeReducer";

import {
  counterInitialState,
  counterType,
  counterReducer,
} from "../../reducers/counterReducer";

import { reducerActionType } from "../../types/reducerActionType";

type initialStateType = {
  user: userType;
  theme: themeType;
  count: counterType;
};

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  user: userInitialState,
  theme: themeInitialState,
  count: counterInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
  theme: themeReducer(state.theme, action),
  count: counterReducer(state.count, action),
});

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
