import React from 'react';
import styled from 'styled-components';

export type SideBySideLayoutProps = {
    leftContainer: React.ReactNode;
    rightContainer: React.ReactNode;
};

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'left right';
    height: 100vh;

    /* Para telas menores que 768px, o layout deve ser coluna única */
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 'left' 'right';
        grid-gap: 3rem;
        height: auto;
        padding-bottom: 3rem;
    }
`;

const StyledContainer = styled.div<{ area: string }>`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: ${(props) => props.area};
`;

const SideBySideLayout = ({
    leftContainer,
    rightContainer,
}: SideBySideLayoutProps) => {
    return (
        <StyledGrid>
            <StyledContainer area="left">{leftContainer}</StyledContainer>
            <StyledContainer area="right">{rightContainer}</StyledContainer>
        </StyledGrid>
    );
};

export default SideBySideLayout;
