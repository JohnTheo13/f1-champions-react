import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled";

const Button = ({
  onClick,
  disabled = false,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton onClick={onClick} disabled={disabled} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
