import styled from "styled-components";


export const SeasonContainer =  styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    > button {
        width: 200px;
    }
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`