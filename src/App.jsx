import {useEffect, useState} from "react";
import styled from "styled-components";
import Pipe from "./components/Pipe";
import GlobalStyles from "./styles/GlobalStyles";

const Container = styled.div`
  overflow: none;
`;

const Footer = styled.footer`
  background-color: var(--color-gray-200);
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

function App() {
  const [elList, setElList] = useState([]);

  const startAnimation = () => {
    const id = Math.random();
    // setPipeCount(pipeCount => pipeCount + 1);
    setElList(elList => [...elList, <Pipe key={id} />]);

    setTimeout(() => {
      setElList(elList => elList.slice(1));
    }, 2000);
  };

  useEffect(() => {
    document.addEventListener("click", startAnimation);
    return () => {
      document.removeEventListener("click", startAnimation);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>{elList};</Container>
      <Footer>
        <p>&copy; stockriderj 2023</p>
      </Footer>
    </>
  );
}

export default App;
