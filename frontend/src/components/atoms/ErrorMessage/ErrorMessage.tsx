import React from 'react';
import { ErrorMessageProps } from './ErrorMessage.props';
import * as Styled from './ErrorMessage.styles';

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
    return (
        <Styled.Container>
            <Styled.Text>{children}</Styled.Text>
        </Styled.Container>
    );
};
