import { FaShareAltSquare } from "react-icons/fa";
import colors from "../styles/colors";

export type Level = {
  title: string;
  color: any;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};

export const levels: Level[] = [
  { title: "Magreza", color: colors.cardGrey, icon: "down", imc: [0, 18.5] },
  { title: "Normal", color: colors.cardGreen, icon: "up", imc: [18.6, 24.99] },
  {
    title: "Sobrepeso",
    color: colors.cardYellow,
    icon: "down",
    imc: [25.0, 30.0],
  },
  { title: "Magreza", color: colors.cardRed, icon: "down", imc: [30.1, 99.0] },
];

export const calculoImc = (pesoAlt: number, alturaAlt: number) => {
  const imc = parseFloat((pesoAlt / (alturaAlt * alturaAlt)).toFixed(2));

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy: Level = { ...levels[i] };
      levelCopy.yourImc = imc;
      return levelCopy;
    }
  }

  return null;
};
