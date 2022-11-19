import React, { useCallback, useEffect } from 'react';
import * as Styled from './TransactionsTable.styles';
import { ButtonContainer } from './TransactionsTable.styles';
import * as CalendarStyles from '../../../styles/shared/calendarStyles';
import moment from 'moment';
import { useBalances, useTransactions } from '../../../hooks';
import { LogIn, LogOut } from 'react-feather';
import { formatCurrency, formatDate } from '../../../utils';
import { Button, ButtonGroup } from '../../atoms';
import { useSelector } from 'react-redux';
import { StateType } from '../../../store/reducers';
import DatePicker from 'react-datepicker';
import {
    nullTransactionsListRequestModel,
    TransactionsListRequestModel,
    TransactionsListResponseModel,
} from '../../../models';

const limit = nullTransactionsListRequestModel?.limit || 50;

export const TransactionsTable = () => {
    /* Dados da paginação */
    const [transactionList, setTransactionList] =
        React.useState<TransactionsListResponseModel>([]);
    const [page, setPage] = React.useState(1);
    const [hasMore, setHasMore] = React.useState(true);

    /* Dados da API */
    const { balance } = useBalances();
    const { values_hidden } = useSelector((state: StateType) => state.ui);
    const { transactions, success, refreshTransactions } = useTransactions();

    /* Dados dos filtros */
    const [filter, setFilter] = React.useState<'all' | 'cash-in' | 'cash-out'>(
        'all'
    );
    const [startDate, setStartDate] = React.useState<Date>();
    const [endDate, setEndDate] = React.useState<Date>();

    const getRequestParams = useCallback((): TransactionsListRequestModel => {
        return {
            page,
            limit,
            ...(filter !== 'all' && { type: filter }),
            ...{
                ...(startDate && {
                    startDate: moment(startDate).startOf('day').toISOString(),
                }),
                ...(endDate && {
                    endDate: moment(endDate).endOf('day').toISOString(),
                }),
            },
        };
    }, [page, limit, filter, startDate, endDate]);

    const onChangeDates = useCallback((dates: [Date, Date]) => {
        const [start, end] = dates;

        if (start && end === null) {
            setStartDate(start);
            setEndDate(undefined);
        } else if (start && end) {
            setStartDate(start);
            setEndDate(end);
            setPage(1);
        }
    }, []);

    useEffect(() => {
        if ((endDate && startDate) || (!endDate && !startDate)) {
            refreshTransactions(getRequestParams());
        }
    }, [page, filter, endDate]);

    useEffect(() => {
        if (success) {
            if (page === 1) {
                setTransactionList(transactions);
            }

            if (transactions.length < limit) {
                setHasMore(false);
            }

            if (page > 1) {
                setTransactionList([...transactionList, ...transactions]);
            }
        }
    }, [transactions]);

    const checkTransactionType = useCallback(
        (destinationAccountId: number) => {
            if (destinationAccountId === balance.accountId) {
                return 'cash-in';
            } else {
                return 'cash-out';
            }
        },
        [balance]
    );

    const renderIcon = useCallback(
        (type: string) => {
            if (type === 'cash-out') {
                return <LogIn />;
            } else {
                return <LogOut />;
            }
        },
        [checkTransactionType]
    );

    useEffect(() => {
        setPage(1);
        setHasMore(true);
    }, [filter]);

    const resetFilters = useCallback(() => {
        setStartDate(undefined);
        setEndDate(undefined);
        setFilter('all');
        setPage(1);
        setHasMore(true);
    }, []);

    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.HeaderCount>
                    {transactionList.length} resultados |{' '}
                    <Styled.HeaderResetFilter
                        onClick={() => {
                            resetFilters();
                        }}
                    >
                        Limpar filtros
                    </Styled.HeaderResetFilter>
                </Styled.HeaderCount>
                <ButtonGroup
                    options={[
                        { label: 'Todas', value: 'all' },
                        { label: 'Entradas', value: 'cash-in' },
                        { label: 'Saídas', value: 'cash-out' },
                    ]}
                    selectedValue={filter}
                    onChange={(value) => {
                        setFilter(value as 'all' | 'cash-in' | 'cash-out');
                        setPage(1);
                    }}
                />
                <Styled.FiltersContainer>
                    <DatePicker
                        selected={startDate}
                        onChange={onChangeDates}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        shouldCloseOnSelect={true}
                        dropdownMode={'scroll'}
                        placeholderText={'Selecione um período'}
                        customInput={<CalendarStyles.CalendarInput />}
                    />
                </Styled.FiltersContainer>
            </Styled.Header>

            <Styled.Table>
                <Styled.Head>
                    <Styled.Row>
                        <Styled.Cell>ID</Styled.Cell>
                        <Styled.Cell>
                            <Styled.MiddleCell>Origem</Styled.MiddleCell>
                        </Styled.Cell>
                        <Styled.Cell>
                            <Styled.MiddleCell>Destino</Styled.MiddleCell>
                        </Styled.Cell>
                        <Styled.Cell>
                            <Styled.MiddleCell>Valor</Styled.MiddleCell>
                        </Styled.Cell>
                        <Styled.Cell>
                            <Styled.MiddleCell>Data</Styled.MiddleCell>
                        </Styled.Cell>
                        <Styled.Cell>
                            <Styled.LastCell>Tipo</Styled.LastCell>
                        </Styled.Cell>
                    </Styled.Row>
                </Styled.Head>

                {transactionList?.length === 0 ? (
                    <Styled.Body>
                        <Styled.PlaceholderRow>
                            <Styled.PlaceholderCell>
                                {'Nenhuma\ntransação\nencontrada'}
                            </Styled.PlaceholderCell>
                        </Styled.PlaceholderRow>
                    </Styled.Body>
                ) : (
                    <Styled.Body>
                        {transactionList.map((transaction) => (
                            <Styled.Row key={transaction.id}>
                                <Styled.Cell>{transaction.id}</Styled.Cell>
                                <Styled.Cell>
                                    <Styled.MiddleCell>
                                        {transaction.debitedAccountId}
                                    </Styled.MiddleCell>
                                </Styled.Cell>
                                <Styled.Cell>
                                    <Styled.MiddleCell>
                                        {transaction.creditedAccountId}
                                    </Styled.MiddleCell>
                                </Styled.Cell>
                                <Styled.Cell>
                                    <Styled.MiddleCell>
                                        {formatCurrency(
                                            transaction.value,
                                            values_hidden
                                        )}
                                    </Styled.MiddleCell>
                                </Styled.Cell>
                                <Styled.Cell>
                                    <Styled.MiddleCell>
                                        {formatDate(transaction.createdAt)}
                                    </Styled.MiddleCell>
                                </Styled.Cell>
                                <Styled.Cell>
                                    <Styled.LastCell>
                                        {renderIcon(
                                            checkTransactionType(
                                                transaction.debitedAccountId
                                            )
                                        )}
                                    </Styled.LastCell>
                                </Styled.Cell>
                            </Styled.Row>
                        ))}
                    </Styled.Body>
                )}
            </Styled.Table>
            {hasMore && transactions?.length >= limit && (
                <ButtonContainer>
                    <Button onClick={() => setPage(page + 1)}>
                        Carregar mais
                    </Button>
                </ButtonContainer>
            )}
        </Styled.Container>
    );
};
