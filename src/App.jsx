import styled from "styled-components";
import Pipe from "./components/Pipe";
import GlobalStyles from "./styles/GlobalStyles";

const Container = styled.div`
  overflow: none;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Pipe />
      </Container>
    </>
  );
}

export default App;
