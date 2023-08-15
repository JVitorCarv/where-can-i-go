import { styled, css} from "styled-components";

export const LanguageListContainer = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 25px;
`

export const LanguageListItem = styled.div`
    ${({ display }) => css`
        display: ${display && "none"};
    `}
    text-align: center;
    padding: 5px;
    border: 1px solid white;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
        color: #42f56c;
        border-color: #42f56c;
    }
`
