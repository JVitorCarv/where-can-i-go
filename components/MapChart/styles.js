import { css, styled } from "styled-components";
import { Geography } from "react-simple-maps";

export const StyledGeography = styled(Geography)`
    ${({ ishighlighted }) => css`
        fill: ${ishighlighted ? "#0af062" : "#6c6b8c"};
        &:hover {
            fill: ${ishighlighted ? "#4efc91" : "#78778c"};
        }
        &:focus {
            fill: ${ishighlighted ? "#6effa6" : "#89898f"};
        }
    `}
    outline: none;
`;

export const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 90vh;
    overflow: hidden;
`

export const Container = styled.div`
    display: flex;
    flex: 5;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`