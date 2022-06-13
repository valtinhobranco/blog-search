import { v4 as uuidv4 } from "uuid";
import { reducerActionType } from "../../types/reducerActionType";

export type listPersonType = {
  idList: string;
  nameList: string;
};

export const listPersonInitialState: listPersonType = {
  idList: "",
  nameList: "",
};

export const listPersonReducer = (
  state: listPersonType[],
  action: reducerActionType
) => {
  switch (action.type) {
    case "ADD":
      if (action.payload?.nameList) {
        const newState = [...state];
        newState.push({
          idList: uuidv4(),
          nameList: action.payload?.nameList,
        });
        return newState;
      }
      break;
    case "DEL":
      if (action.payload?.id) {
        let newState = [...state];
        newState = newState.filter(
          (item) => item.idList !== action.payload?.id
        );
        return newState;
      }
      break;
    case "ORDER":
      let newState = [...state];
      newState = newState.sort((a, b) => (a.nameList > b.nameList ? 1 : -1));
      return newState;
      break;

    default:
      break;
  }
  return state;
};
