import { v4 as uuidv4 } from "uuid";

//? types
type ItemType = {
  id: string;
  name: string;
  lastName: string;
  age: number;
};

export const Items: ItemType[] = [
  {
    id: uuidv4(),
    name: "Valter",
    lastName: "Branco",
    age: 33,
  },
  {
    id: uuidv4(),
    name: "Carol",
    lastName: "Branco",
    age: 36,
  },
  {
    id: uuidv4(),
    name: "Erica",
    lastName: "Branco",
    age: 35,
  },
  {
    id: uuidv4(),
    name: "Sonia",
    lastName: "Branco",
    age: 67,
  },
  {
    id: uuidv4(),
    name: "Sofia",
    lastName: "Branco",
    age: 6,
  },
];
