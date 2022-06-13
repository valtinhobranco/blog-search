import { ReactNode } from "react";
import ButtonBack from "../../components/ButtonBack";
import Header from "../../components/Header";

import * as Styles from "./styles";

interface NotFoundProps {
  children?: ReactNode;
}

function NotFound({ children }: NotFoundProps) {
  return (
    <>
      <Header>
        <h1>Pagina não encontrada</h1>
      </Header>
      <Styles.Container>{children}</Styles.Container>
    </>
  );
}

export default NotFound;
