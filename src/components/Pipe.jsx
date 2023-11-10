import React, {useState} from "react";
import styled from "styled-components";

const Img = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -999;
`;

function Pipe() {
  const audio = new Audio("/sounds/pipe.mp3");
  const [pipeCount, setPipeCount] = useState(0);

  audio.addEventListener("playing", () => setIsPlaying(true));
  audio.addEventListener("ended", () => setIsPlaying(false));

  const startAnimation = () => {
    audio.play();
    setPipeCount(pipeCount => pipeCount + 1);

    // Optionally, set a timeout to reset the visibility state
    // if you want to be able to play the animation again later
    setTimeout(() => {
      setPipeCount(pipeCount => pipeCount - 1);
    }, 300);
  };

  const arr = [];
  for (let i = 0; i < pipeCount; i++) {
    arr.push(
      <Img
        className="fadeout-short"
        src="/images/pipe.jpeg"
        alt="SKIBIDI PIPE"
        key={i}
      />
    );
  }

  return (
    <>
      <button onClick={startAnimation}>
        {/* {isPlaying ? "Stop Sound" : "Play Sound"} */}
        METAL PIPE
      </button>
      {arr}
    </>
  );
}

export default Pipe;
