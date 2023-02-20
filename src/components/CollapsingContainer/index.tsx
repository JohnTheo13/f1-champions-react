import styled from "styled-components";

interface CollapseProps {
  collapsed: boolean;
  height?: string;
}

const CollapsingContainer = styled.div<CollapseProps>`
  overflow: hidden;
  height: ${({ collapsed, height }) =>
    collapsed ? "0px" : height ?? "fit-content"};
  transition: height .4s ease-in-out;
`;

export default CollapsingContainer;
