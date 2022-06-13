import { ReactNode, useContext, useState } from "react";
import { Context } from "../../contexts/Context";

import Button from "../Button";
import ButtonBack from "../ButtonBack";

//? styles
import * as Styles from "./styles";

interface HeaderProps {
  children: ReactNode;
  addFirstPage?: boolean;
  addHeaderButton?: boolean;
}

function Header({ children, addFirstPage, addHeaderButton }: HeaderProps) {
  return (
    <Styles.Header>
      <Styles.HeaderContent>
        <Styles.Title className="text-5xl">{children}</Styles.Title>
        <ButtonBack firstPage={addFirstPage} headerButton={addHeaderButton} />
      </Styles.HeaderContent>
    </Styles.Header>
  );
}

export default Header;
