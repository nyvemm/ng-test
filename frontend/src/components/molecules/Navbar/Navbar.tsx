import React, { useCallback } from 'react';
import * as Styled from './Navbar.styles';
import Logo from '../../../assets/images/logo.svg';
import { LogOut } from 'react-feather';
import { Colors } from '../../../styles/colors';
import { userLogout } from '../../../store/user';
import { useDispatch } from 'react-redux';

export const Navbar = () => {
    const dispatch = useDispatch();

    const logout = useCallback(() => {
        dispatch(userLogout());
    }, [dispatch]);

    return (
        <Styled.Container>
            <Styled.LogoContainer>
                <Styled.Logo src={Logo} />
            </Styled.LogoContainer>
            <Styled.ListContainer>
                <Styled.ListItem onClick={() => logout()}>
                    <LogOut size={18} color={Colors.secondary} />
                </Styled.ListItem>
            </Styled.ListContainer>
        </Styled.Container>
    );
};
