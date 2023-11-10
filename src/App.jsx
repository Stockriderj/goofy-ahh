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
  return (
    <>
      <GlobalStyles />
      <Container>
        <Pipe />
      </Container>
      <Footer>
        <p>&copy; stockriderj 2023</p>
      </Footer>
    </>
  );
}

export default App;
