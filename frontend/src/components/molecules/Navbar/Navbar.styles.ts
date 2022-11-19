import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { FontReduced, FontRegular } from '../../../styles/typography';

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    background-color: ${Colors.primary};
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
`;

export const Logo = styled.img`
    height: 60px;
    width: 60px;
`;

export const ListContainer = styled.ul`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
`;

export const ListItem = styled.li`
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
`;
