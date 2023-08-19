import { styled } from "styled-components";

export const LanguageSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0d172e;
    flex: 1;
    height: 90vh;
    color: white;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        border-right: solid 1px white;
        border-left: solid 1px white;
    }
    &::-webkit-scrollbar-thumb {
        background-color: white;
    }
`

export const SelectLanguageTitle = styled.h1`
    text-align: center;
`
