import { ReactNode } from "react";

//? styles
import * as Styles from "./styles";

interface ContentBoxProps {
  children?: ReactNode;
}

function ContentBox({ children }: ContentBoxProps) {
  return <Styles.ContentBox>{children}</Styles.ContentBox>;
}

export default ContentBox;
