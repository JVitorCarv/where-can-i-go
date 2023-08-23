import { useEffect, useState } from "react";
import { CursorFollowingDiv } from "./styles";

const CountryName = ({ name }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) =>
    setCursorPosition({ x: event.clientX, y: event.clientY });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
        {name && (<CursorFollowingDiv
            left={cursorPosition.x + 30}
            top={cursorPosition.y + 50}
        >
            {name}
        </CursorFollowingDiv>)}
    </>
  );
};

export default CountryName;
