import React, { memo } from 'react';
import * as Styled from './EyeIcon.styles';
import { EyeIconProps } from './EyeIcon.props';
import { Eye, EyeOff } from 'react-feather';

export const EyeIcon = memo(
    ({ color, size, visible, onClick }: EyeIconProps) => {
        const IconStyled = visible ? EyeOff : Eye;

        return (
            <Styled.Container onClick={() => onClick?.()}>
                <IconStyled size={size} color={color} />
            </Styled.Container>
        );
    }
);
