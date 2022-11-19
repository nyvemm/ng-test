import styled from 'styled-components';
import { FontReduced, FontRegular, FontSubtitle } from '../typography';
import { Colors } from '../colors';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px;
`;

export const Title = styled.h1<{
    mb?: string;
}>`
    ${FontSubtitle};
    color: ${Colors.primary};
    margin-bottom: ${(props) => props.mb || '40px'};
    width: 100%;
`;

export const Form = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Fieldset = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`;

export const LinkContainer = styled.p`
    ${FontRegular};
    width: 100%;
    text-align: left;
    margin-bottom: 24px;
`;

export const Link = styled(RouterLink)`
    color: ${Colors.primary};
    cursor: pointer;
    text-decoration: underline;
`;
