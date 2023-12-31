import { Wrapper } from "./styles";

export type ButtonProps = {
  fullWidth?: boolean;
  onClick?: () => void;
} & Required<React.PropsWithChildren>;

const Button = ({ children, fullWidth, onClick }: ButtonProps) => (
  <Wrapper fullWidth={fullWidth} onClick={onClick}>
    {children}
  </Wrapper>
);

export default Button;
