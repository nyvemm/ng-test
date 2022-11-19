import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { FontRegular } from '../../../styles/typography';

export const Button = styled.button<{
    disabled?: boolean;
    mt?: string;
}>`
    ${FontRegular};
    background-color: ${Colors.secondary};
    outline: none;
    border: 1px solid ${Colors.primary};
    color: ${Colors.primary};
    border-radius: 50px;
    padding: 12px 32px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    align-self: flex-start;
    margin-top: ${(props) => props.mt || '0px'};

    ${({ disabled }) =>
        disabled &&
        `
        opacity: 0.5;
        cursor: not-allowed;
    `}

    ${({ disabled }) =>
        !disabled &&
        `
        &:hover {
        background-color: ${Colors.primary};
        color: ${Colors.secondary};
        }
    `}
`;
