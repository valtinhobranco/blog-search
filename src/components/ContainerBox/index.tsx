import { ReactNode } from "react";

import { Container } from "./styles";

interface ContainerProps {
  children: ReactNode;
}

function ContainerBox({ children }: ContainerProps) {
  return <Container>{children}</Container>;
}

export default ContainerBox;
