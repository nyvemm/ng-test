import styled from 'styled-components';
import {
    FontReduced,
    FontRegular,
    FontSubtitle,
} from '../../../styles/typography';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
    width: 70%;
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        margin-bottom: 16px;
    }
`;

export const HeaderCount = styled.p`
    ${FontReduced};
    color: ${Colors.primary};
    margin-right: 8px;
`;

export const HeaderResetFilter = styled.a`
    ${FontReduced};
    color: ${Colors.primary};
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Table = styled.table`
    width: 100%;
    margin-bottom: 20px;
`;

export const Head = styled.thead``;

export const Body = styled.tbody``;

export const Row = styled.tr`
    width: 100%;
    display: grid;
    grid-template-columns: 32px 1fr 1fr 1fr 1fr 80px;
    grid-template-rows: 1fr;
    grid-template-areas: 'id origin destination amount date status';
    grid-gap: 12px;
    border-bottom: 1px solid ${Colors.primaryBorderColor};
    padding: 20px 0;
    transition: all 0.2s ease-in-out;

    tbody &:hover {
        background-color: #f5f5f5;
    }

    /* Para telas menores que 750 o campo de amount fica oculto */
    @media (max-width: 750px) {
        grid-template-columns: 32px 1fr 1fr 1fr 80px;
        grid-template-areas: 'id origin destination amount status';

        & > td:nth-child(5) {
            display: none;
        }
    }
`;

export const Cell = styled.td`
    ${FontRegular};
    text-align: center;
    align-self: center;

    tbody > & {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const LastCell = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MiddleCell = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PlaceholderRow = styled.tr`
    width: 100%;
`;

export const PlaceholderCell = styled.td`
    ${FontSubtitle};
    padding-top: 28px;
    text-align: center;
    white-space: pre;
`;
