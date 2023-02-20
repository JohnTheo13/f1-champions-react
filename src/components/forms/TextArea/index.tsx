import { TextareaHTMLAttributes } from "react";
import StyledTextArea from "./styled";

type Props = TextareaHTMLAttributes<any> & {
  label?: string;
};

const TextArea = ({ label, name, ...rest }: Props) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <StyledTextArea {...rest} />
  </>
);

export default TextArea;
