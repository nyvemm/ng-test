import styled from 'styled-components';
import { Colors } from '../colors';

export const CalendarInput = styled.input`
    padding: 0.5rem;
    min-width: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center
    align-items: center;
    border: 1px solid ${Colors.primaryBorderColor};
    border-radius: 4px;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
    transition: all 0.2s ease-in-out;

    &:focus {
        outline: 1px solid ${Colors.primary};
    }
`;
