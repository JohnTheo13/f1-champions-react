
import { InputHTMLAttributes } from "react";
import StyledInput from "./styled";
import { BaseProps } from "../sharedStyles";

type Props = InputHTMLAttributes<any>&BaseProps &{
  label?: string
}

const Input = ({ label, type, name, ...rest }: Props) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <StyledInput name={name} type={type} {...rest} />
    </>
  );
};

export default Input;
