import styled from "styled-components";
import sharedStyles from "../sharedStyles";

export const StyledSelect = styled.select`
  ${sharedStyles}
  -webkit-appearance: none; /* stylelint-disable-line */
  -moz-appearance: none; /* stylelint-disable-line */
  appearance: none;
  background-image: url('images/arrow_up_down.svg') !important;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  background-size: 20px;
`;

export const StyledOption = styled.option`
    color: black;
`
