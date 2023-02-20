import { InputHTMLAttributes } from "react";

type Props = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInput = ({ label, name, ...props }: Props) => {

  return (
    <div>
      {label && <label htmlFor={name}>{name}</label>}
      <input type="text" name={name} {...props} />
    </div>
  );
};

export default SearchInput;
