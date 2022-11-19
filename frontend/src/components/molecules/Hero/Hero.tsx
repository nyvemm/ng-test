import React from 'react';
import * as Styled from './Hero.styles';
import { HeroProps } from './Hero.props';
import MobileImage from '../../../assets/images/mobile.png';

export const Hero = ({ title, subtitle }: HeroProps) => {
    return (
        <Styled.Container>
            <Styled.TextContainer>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Subtitle>{subtitle}</Styled.Subtitle>
            </Styled.TextContainer>
            <Styled.Image src={MobileImage} alt="Um dispositivo móvel com a logo do site" />
        </Styled.Container>
    );
};
