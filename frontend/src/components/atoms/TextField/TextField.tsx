import React, { memo, useCallback } from 'react';
import { TextFieldProps } from './TextField.props';
import * as Styled from './TextField.styles';
import { Eye, EyeOff } from 'react-feather';
import { Colors } from '../../../styles/colors';

const BlockedDecimalKeys = ['e', 'E', '+', '-', '.', ','];

export const TextField = memo((props: TextFieldProps) => {
    const { value, label, onChange, type, onlyIntegers, ...others } = props;

    const [isVisible, setIsVisible] = React.useState(false);

    const onTextFieldChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            props.onChange(event.target.value);
        },
        [props.onChange]
    );

    const getTypeByHidden = useCallback(() => {
        if (type === 'password') {
            return isVisible ? 'text' : 'password';
        } else {
            return type;
        }
    }, [type, isVisible]);

    const renderIcon = useCallback(() => {
        if (type === 'password') {
            const Icon = isVisible ? EyeOff : Eye;

            return (
                <Styled.IconContainer onClick={() => setIsVisible(!isVisible)}>
                    <Icon size={18} color={Colors.primary} />
                </Styled.IconContainer>
            );
        }
        return null;
    }, [type, isVisible]);

    const blockNonDecimal = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (
                type === 'number' &&
                onlyIntegers &&
                BlockedDecimalKeys.includes(event.key)
            ) {
                event.preventDefault();
            }
        },
        [type]
    );

    return (
        <Styled.Container>
            <Styled.Label>{label}</Styled.Label>
            <Styled.Input
                value={props.value}
                onChange={onTextFieldChange}
                type={getTypeByHidden()}
                onKeyDown={blockNonDecimal}
                {...others}
            />
            {renderIcon()}
        </Styled.Container>
    );
});
