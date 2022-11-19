import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import {
    FontLarge,
    FontRegular,
    FontSubtitle,
    FontTitle,
} from '../../../styles/typography';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    min-height: 180px;
    background-color: ${Colors.secondary};
    border-radius: 10px;
    padding: 20px;
    border: 1px solid ${Colors.primary};
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
`;

export const Title = styled.h1`
    ${FontLarge};
    color: ${Colors.primary};
    margin-right: 12px;
`;

export const BalanceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const Balance = styled.p`
    width: 100%;
    ${FontTitle};
    color: ${Colors.primary};
    margin-right: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: clamp(12px, 7vw, 48px);
`;
