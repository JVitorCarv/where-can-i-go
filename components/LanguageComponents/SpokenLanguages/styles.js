import { styled } from "styled-components";

export const SpokenLanguage = styled.div`
    background-color: #17274f;
    border-radius: 10px;
    padding: 10px;
    &::after{
        content: " ✖";
    }
    cursor: pointer;
`

export const SpokenLanguagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`