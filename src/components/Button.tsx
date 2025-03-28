import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import { ReactNode } from 'react';

interface ButtonProps extends AntdButtonProps {
  content?: 'basic' | 'iconOnly';
  children?: ReactNode;
}

const Button = ({ content = 'basic', children, ...props }: ButtonProps) => {
  return (
    <AntdButton {...props} type={content === 'iconOnly' ? 'text' : props.type}>
      {children}
    </AntdButton>
  );
};
export default Button;
