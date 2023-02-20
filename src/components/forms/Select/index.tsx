import { SelectHTMLAttributes } from "react";
import { StyledSelect, StyledOption } from "./styled";

type Props = SelectHTMLAttributes<any> & {
  label?: string;
  options: {
    value: string;
    id: string;
  }[];
};
const SelectInput = ({ label, name, options, placeholder, ...rest }: Props) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <StyledSelect {...rest}>
      {placeholder && <StyledOption value="">{placeholder}</StyledOption>}
      {options.map(({ value, id }) => (
        <StyledOption value={value} key={id}>
          {value}
        </StyledOption>
      ))}
    </StyledSelect>
  </>
);

export default SelectInput;
