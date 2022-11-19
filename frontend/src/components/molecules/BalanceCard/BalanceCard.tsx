import React, { memo, useCallback, useEffect, useMemo } from 'react';
import * as Styled from './BalanceCard.styles';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../../store/reducers';
import { Button, EyeIcon } from '../../atoms';
import { openTransactionsModal, toggleHideValues } from '../../../store/ui';
import ReactTooltip from 'react-tooltip';
import { Info } from 'react-feather';
import { Colors } from '../../../styles/colors';
import { useBalances } from '../../../hooks';
import { formatCurrency } from '../../../utils';

export const BalanceCard = memo(() => {
    const dispatch = useDispatch();
    const { balance, refreshBalance } = useBalances();

    useEffect(() => {
        refreshBalance();
    }, []);

    const values_hidden = useSelector(
        (state: StateType) => state.ui.values_hidden
    );

    const formattedBalance = useMemo(() => {
        return formatCurrency(balance.balance, values_hidden);
    }, [balance, values_hidden]);

    const openTransactionModal = useCallback(() => {
        dispatch(openTransactionsModal());
    }, [dispatch]);

    return (
        <Styled.Container>
            <Styled.TitleContainer>
                <Styled.Title>Saldo</Styled.Title>
                <Info
                    data-tip
                    size={16}
                    data-for="balance"
                    color={Colors.primary}
                />
                <ReactTooltip
                    id="balance"
                    multiline={true}
                    type="dark"
                    place="right"
                >
                    {values_hidden ? (
                        <>Clique no ícone para mostrar os valores</>
                    ) : (
                        <>
                            Seu saldo atual é de: <b>{formattedBalance}</b>
                        </>
                    )}
                </ReactTooltip>
            </Styled.TitleContainer>
            <Styled.BalanceContainer>
                <Styled.Balance>{formattedBalance}</Styled.Balance>
                <EyeIcon
                    visible={values_hidden}
                    onClick={() => dispatch(toggleHideValues())}
                />
            </Styled.BalanceContainer>
            <Button
                onClick={() => {
                    openTransactionModal();
                }}
            >
                Fazer uma transferência
            </Button>
        </Styled.Container>
    );
});
