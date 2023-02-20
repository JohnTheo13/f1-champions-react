import styled from "styled-components";
import sharedStyles from "../sharedStyles";

const StyledTextArea = styled.textarea`
  ${sharedStyles}
  min-height: 150px;
  resize: none;
`;

export default StyledTextArea
