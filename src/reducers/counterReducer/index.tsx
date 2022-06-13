import { reducerActionType } from "../../types/reducerActionType";

export type counterType = {
  count: number;
};

export const counterInitialState: counterType = {
  count: 0,
};

export const counterReducer = (
  state: counterType,
  action: reducerActionType
) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
      break;
    case "REMOVE":
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      }
      break;
    case "CLEAR":
      return counterInitialState;
      break;
  }

  return state;
};
