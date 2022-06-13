import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

type PersonProps = {
  id: string;
  name: string;
};
type ActionProps = {
  type: string;
  payload?: {
    name?: string;
    id?: string;
  };
};

const inicialState: PersonProps[] = [];
const reducer = (state: PersonProps[], action: ActionProps) => {
  switch (action.type) {
    case "ADD":
      if (action.payload?.name) {
        const newState = [...state];
        newState.push({
          id: uuidv4(),
          name: action.payload?.name,
        });
        return newState;
      }
      break;
    case "DEL":
      if (action.payload?.id) {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== action.payload?.id);
        return newState;
      }
      break;
    case "ORDER":
      let newState = [...state];
      newState = newState.sort((a, b) => (a.name > b.name ? 1 : -1));
      return newState;
      break;

    default:
      break;
  }
  return state;
};

export const ListPeopleReducer = () => {
  return useReducer(reducer, inicialState);
};
