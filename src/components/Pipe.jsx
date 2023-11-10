import React, {useEffect, useState} from "react";
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
  const audio = new Audio("/sounds/pipe.mp3");
  //   const [pipeCount, setPipeCount] = useState(0);
  const [elList, setElList] = useState([]);

  //   audio.addEventListener("playing", () => setIsPlaying(true));
  //   audio.addEventListener("ended", () => setIsPlaying(false));

  const startAnimation = () => {
    audio.play();

    const id = Math.random();
    // setPipeCount(pipeCount => pipeCount + 1);
    setElList(elList => [
      ...elList,
      <Img
        className="fadeout-medium"
        top={randomNumber(50)}
        left={randomNumber(50)}
        src="/images/pipe.jpeg"
        alt="SKIBIDI PIPE"
        key={id}
      />,
    ]);

    setTimeout(() => {
      setElList(elList => elList.slice(1));
    }, 10000);
  };

  useEffect(() => {
    document.addEventListener("click", startAnimation);
    return () => {
      document.removeEventListener("click", startAnimation);
    };
  }, []);

  return <>{elList}</>;
}

export default Pipe;
