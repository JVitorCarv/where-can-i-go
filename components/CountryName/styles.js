import { styled } from "styled-components";

export const CursorFollowingDiv = styled.div`
    position: fixed;
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, -50%);
    left: ${({ left }) => left}px;
    top: ${({ top }) => top}px;
    z-index: 300;
`