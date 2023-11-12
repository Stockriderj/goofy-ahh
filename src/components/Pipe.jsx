import {useEffect} from "react";
import styled from "styled-components";

function randomNumber(max) {
  return Math.round(Math.random() * max);
}

const Img = styled.img`
  position: absolute;
  width: 50%;
  height: 50%;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  z-index: -999;
`;

function Pipe() {
  //   const [pipeCount, setPipeCount] = useState(0);

  //   audio.addEventListener("playing", () => setIsPlaying(true));
  //   audio.addEventListener("ended", () => setIsPlaying(false));

  useEffect(() => {
    new Audio("/sounds/pipe.mp3").play();
  }, []);

  return (
    <Img
      className="fadeout-medium"
      top={randomNumber(50)}
      left={randomNumber(50)}
      src="/images/pipe.jpeg"
      alt="SKIBIDI PIPE"
    />
  );
}

export default Pipe;
