import { ReactNode } from "react";

//?  Styles

import * as Styles from "./styles";

type CardBoxProps = {
  title?: string;
  paragraph?: string;
  children?: ReactNode;
  className?: string;
};

const CardBox = ({ title, paragraph, children, className }: CardBoxProps) => {
  return (
    <>
      <Styles.Container className={className}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        {children}
      </Styles.Container>
    </>
  );
};

export default CardBox;
