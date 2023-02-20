import styled, { keyframes } from "styled-components";

const animation = keyframes`
  20% {margin-left: 0px;}
  30% {margin-left: -100%;}
  50% {margin-left: -100%;}
  60% {margin-left: -200%;}
  70% {margin-left: -200%;}
  80% {margin-left: -300%;}
  90% {margin-left: -300%;}
  100% {margin-left: 0px}
`;

const SlideContainer = styled.div`
  background-color: #000000;
  overflow: hidden;
  height: 100%;
  width: 75%;
  margin: 0 auto;
  & > div {
    width: 400%;
    height: 100%;
    animation: ${animation} 18s ease infinite;
    & > img {
      float: left;
      height: 100%;
      width: 25%;
    }
  }
`;

export { SlideContainer };
