import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { FontReduced } from '../../../styles/typography';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
`;

export const Button = styled.button<{
    selected: boolean;
}>`
    ${FontReduced};
    padding: 0.5rem;
    border: 1px solid ${Colors.primary};
    color: ${Colors.primary};
    border-radius: 18px;
    box-sizing: border-box;
    background-color: ${Colors.secondary};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    ${({ selected }) =>
        selected &&
        `
        background-color: ${Colors.primary};
        color: ${Colors.secondary};
    `}
    &:hover {
        ${({ selected }) => !selected && `opacity: 0.8;`}
    }
`;
