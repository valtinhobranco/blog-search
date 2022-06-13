import { useEffect, useState } from "react";
import { reducerActionType } from "../../types/reducerActionType";
// import usePersistedState from "../themePermanentReducer";

export type themeType = {
  status: "dark" | "light" | any;
  listStatus?: () => void;
};

export const themeInitialState: themeType = {
  listStatus: function () {
    if (this.status) {
      status: "dark";
    } else {
      status: "light";
    }
  },
  status: null,
};

export const themeReducer = (state: themeType, action: reducerActionType) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      return { ...state, status: action.payload.status };
      break;

    default:
      break;
  }
  return state;
};
