import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { shade } from "polished";

//? styles

import * as Styles from "./styles";

//? components
import Button from "../Button";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";
import { Context } from "../../contexts/Context";

interface ButtonBackProps {
  children?: ReactNode;
  firstPage?: boolean;
  headerButton?: boolean;
}

function ButtonBack({ children, firstPage, headerButton }: ButtonBackProps) {
  const navigate = useNavigate();

  const { colors, title } = useContext(ThemeContext);

  const { state, dispatch } = useContext(Context);

  const handleChandeTheme = () => {
    if (state.theme.status === "dark") {
      dispatch({
        type: "CHANGE_STATUS",
        payload: {
          status: "light",
        },
      });
    } else {
      dispatch({
        type: "CHANGE_STATUS",
        payload: {
          status: "dark",
        },
      });
    }
  };
  return (
    <Styles.Container>
      {!firstPage && (
        <>
          <Button onClick={() => navigate(-1)} addHeaderButton>
            Voltar
          </Button>
          <Button onClick={() => navigate("/")} addHeaderButton>
            Home
          </Button>
        </>
      )}

      <Switch
        onChange={handleChandeTheme}
        checked={title === "light"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.3, colors.primary)}
        onColor={colors.primary}
      />
    </Styles.Container>
  );
}

export default ButtonBack;
