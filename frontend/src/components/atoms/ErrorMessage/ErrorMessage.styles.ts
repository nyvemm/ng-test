import styled from 'styled-components';
import { FontReduced } from '../../../styles/typography';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${Colors.alert};
    border-radius: 5px;
    padding: 4px 12px;
    align-self: flex-start;
    margin-bottom: 12px;
`;

export const Text = styled.p`
    ${FontReduced};
    width: 100%;
    color: ${Colors.alert};
`;
