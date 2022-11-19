import styled from 'styled-components';
import Background from '../../../assets/images/background.jpg';
import { FontSubtitle, FontTitle } from '../../../styles/typography';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px;
    width: 100%;
    height: 100%;

    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`;

export const Title = styled.h1`
    ${FontTitle};
    color: ${Colors.secondary};
    text-align: center;
`;

export const Subtitle = styled.h2`
    ${FontSubtitle};
    color: ${Colors.secondary};
    text-align: center;
`;

export const Image = styled.img`
    width: 70%;
    max-height: 550px;
    object-fit: contain;

    @media (max-width: 768px) {
        display: none;
    }
`;
