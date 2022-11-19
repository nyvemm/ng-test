import React, { memo } from 'react';
import * as Styled from './Button.styles';
import { ButtonProps } from './Button.props';

export const Button = memo((props: ButtonProps) => {
    const { children, ...others } = props;

    return <Styled.Button {...others}>{children}</Styled.Button>;
});
