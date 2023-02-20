import styled from "styled-components";

export const RacesContainer = styled.section`
  > ul {
    list-style: none;
    padding: 0 20px;
    > * .races__driver--chanmpion {
      background-color: pink;
    }
  }
`;

export const ListItem = styled.li<{ champion: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid grey;
  background: ${({ champion }) =>
    champion
      ? "linear-gradient(180deg,rgb(170 81 81 / 94%) 0%,rgba(217,199,35,1) 66%);"
      : "white"};
`;
