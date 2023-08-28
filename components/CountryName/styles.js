import { styled } from "styled-components";

export const CursorFollowingDiv = styled.div`
    position: fixed;
    background-color: #0d172e;
    padding: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, -50%);
    left: ${({ left }) => left}px;
    top: ${({ top }) => top}px;
    border-radius: 25px;
    color: white;
`