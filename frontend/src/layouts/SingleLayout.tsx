import React from 'react';
import styled from 'styled-components';
import { Navbar as StyledNavbar } from '../components';

export type SingleLayoutProps = {
    children: React.ReactNode;
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

const StyledContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`;

const SingleLayout = ({ children }: SingleLayoutProps) => {
    return (
        <StyledContainer>
            <StyledNavbar />
            <StyledContentContainer>{children}</StyledContentContainer>
        </StyledContainer>
    );
};

export default SingleLayout;
