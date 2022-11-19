import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../store/reducers';
import { closeTransactionsModal, openTransactionsModal } from '../store/ui';

export const useTransactionsModal = () => {
    const dispatch = useDispatch();
    const { transactions_modal_open } = useSelector(
        (state: StateType) => state.ui
    );

    const openModal = () => {
        dispatch(openTransactionsModal());
    };

    const closeModal = () => {
        dispatch(closeTransactionsModal());
    };

    const toggleModal = () => {
        if (transactions_modal_open) {
            closeModal();
        } else {
            openModal();
        }
    };

    return {
        isModalOpen: transactions_modal_open,
        openModal,
        closeModal,
        toggleModal,
    };
};
