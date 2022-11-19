import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const FadingBackground = styled(BaseModalBackground)`
    transition: all 0.3s ease-in-out;
`;

export const StyledModal = Modal.styled`
    width: 30rem;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    opacity: 100%;
    transition: all 0.3s ease-in-out;
    border-radius: 12px;
    
    @media (max-width: 480px) {
        width: 100%;
        height: 50%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        align-self: flex-end;
    }
`;
