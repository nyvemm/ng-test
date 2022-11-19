import React from 'react';
import SingleLayout from '../layouts/SingleLayout';
import {
    BalanceCard,
    TransactionsModal,
    TransactionsTable,
} from '../components';

const HomeScreen = () => {
    return (
        <SingleLayout>
            <>
                <TransactionsModal />
                <BalanceCard />
                <TransactionsTable />
            </>
        </SingleLayout>
    );
};

export default HomeScreen;
