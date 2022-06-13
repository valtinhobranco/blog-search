//?  Styles

import { ReactNode } from "react";
import * as Styles from "./styles";

interface ButtonProps {
  children?: ReactNode;

  addOutlineButton?: boolean;
  addMargin?: string;
  addPadding?: string;
  addFontSize?: string;
  addFontWeight?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  addIcon?: any;
  addHeaderButton?: boolean;
}

const Button = ({
  children,
  addOutlineButton,
  addMargin,
  addPadding,
  addFontSize,
  addFontWeight,
  onClick,
  disabled,
  addIcon,
  addHeaderButton,
}: ButtonProps) => {
  return (
    <Styles.Container
      outlineButton={addOutlineButton}
      margin={addMargin}
      padding={addPadding}
      fontSize={addFontSize}
      fontWeight={addFontWeight}
      onClick={onClick}
      disabled={disabled}
      headerButton={addHeaderButton}
    >
      {addIcon && (
        <Styles.IconArea>
          <Styles.Icon src={addIcon} />
        </Styles.IconArea>
      )}
      <Styles.Label>{children}</Styles.Label>
    </Styles.Container>
  );
};

export default Button;
