import React, {useState} from "react";
import styled from "styled-components";

function randomNumber(max) {
  return Math.round(Math.random() * max);
}

const Img = styled.img`
  position: absolute;
  width: 50vw;
  height: 50vh;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  z-index: -999;
`;

function Pipe() {
  const audio = new Audio("/sounds/pipe.mp3");
  const [pipeCount, setPipeCount] = useState(0);
  const [elList, setElList] = useState([]);

  //   audio.addEventListener("playing", () => setIsPlaying(true));
  //   audio.addEventListener("ended", () => setIsPlaying(false));

  const startAnimation = () => {
    audio.play();

    setPipeCount(pipeCount + 1);
    setElList([
      ...elList,
      <Img
        className="fadeout-medium"
        top={randomNumber(50)}
        left={randomNumber(50)}
        src="/images/pipe.jpeg"
        alt="SKIBIDI PIPE"
        key={pipeCount}
      />,
    ]);

    // Optionally, set a timeout to reset the visibility state
    // if you want to be able to play the animation again later
    setTimeout(() => {
      setElList(elList => elList.slice(1));
    }, 5000);
  };

  return (
    <>
      <button onClick={startAnimation}>
        {/* {isPlaying ? "Stop Sound" : "Play Sound"} */}
        METAL PIPE
      </button>
      {elList}
      {/* {[
        <Img
          className="fadeout-medium"
          top={randomNumber(90)}
          left={randomNumber(90)}
          src="/images/pipe.jpeg"
          alt="SKIBIDI PIPE"
          key={pipeCount}
        />,
      ]} */}
    </>
  );
}

export default Pipe;
