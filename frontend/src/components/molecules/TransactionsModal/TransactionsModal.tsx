import React, { memo } from 'react';
import { StyledModal as Modal } from '../../../styles/shared/modalStyles';
import { TransactionCreateForm } from '../../organisms';
import { useTransactionsModal } from '../../../hooks';

export const TransactionsModal = memo(() => {
    const { isModalOpen, closeModal } = useTransactionsModal();
    return (
        <Modal
            isOpen={isModalOpen}
            onBackgroundClick={closeModal}
            onEscapeKeydown={closeModal}
        >
            <TransactionCreateForm />
        </Modal>
    );
});
