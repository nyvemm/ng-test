import React from 'react';
import * as Styled from './ButtonGroup.styles';
import { ButtonGroupProps } from './ButtonGroup.props';

export const ButtonGroup = (props: ButtonGroupProps) => {
    const { options, selectedValue, onChange } = props;

    return (
        <Styled.Container>
            {options.map((option, index) => {
                return (
                    <Styled.Button
                        key={index}
                        onClick={() => onChange(option.value)}
                        selected={option.value === selectedValue}
                    >
                        {option.label}
                    </Styled.Button>
                );
            })}
        </Styled.Container>
    );
};
