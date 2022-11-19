import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { FontRegular } from '../../../styles/typography';

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px 0;
    width: 100%;
`;

export const Label = styled.p`
    ${FontRegular};
    color: ${Colors.primary};
    margin-bottom: 12px;
    text-align: left;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 18px;
    border: 1px solid ${Colors.primaryBorderColor};
    border-radius: 4px;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
    transition: all 0.2s ease-in-out;

    &:focus {
        outline: 1px solid ${Colors.primary};
    }
`;

export const IconContainer = styled.div`
    position: absolute;
    right: 18px;
    bottom: 24px;
    cursor: pointer;
`;
