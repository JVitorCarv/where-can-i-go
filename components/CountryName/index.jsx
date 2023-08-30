import { useEffect, useMemo, useState } from "react";
import { CursorFollowingDiv } from "./styles";


const CountryName = ({ countryInfo }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) =>
    setCursorPosition({ x: event.clientX, y: event.clientY });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const languageItems = useMemo(() => {
    if (countryInfo.languages) {
      return countryInfo.languages.map((l) => <p key={l}>{l}</p>)
    }
  }, [countryInfo.languages])

  return (
    <>
        {Object.keys(countryInfo).length != 0 && (<CursorFollowingDiv
            left={cursorPosition.x + 30}
            top={cursorPosition.y + 50}
        >
            {countryInfo.name}
            {languageItems}
        </CursorFollowingDiv>)}
    </>
  );
};

export default CountryName;
