import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import Button from "../Button";

import { Container } from "./styles";

function BackToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    if (pageYOffset > 600) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [pageYOffset]);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  return (
    <Container>
      {!visible && <Button onClick={scrollToTop}>Voltar para o Topo</Button>}
    </Container>
  );
}

export default BackToTop;
