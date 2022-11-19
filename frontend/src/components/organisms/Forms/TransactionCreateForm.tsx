import React, { useCallback, useEffect } from 'react';
import * as FormStyles from '../../../styles/shared/formStyles';
import { Formik } from 'formik';
import { Button, ErrorMessage, TextField } from '../../atoms';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../../store/reducers';
import { toast } from 'react-toastify';
import { accountsBalance } from '../../../store/accounts';
import { closeTransactionsModal } from '../../../store/ui';
import {
    CreateTransactionSchema,
    nullTransactionsCreateRequestModel,
    nullTransactionsListRequestModel,
    StatusEnum,
    TransactionsCreateRequestModel,
} from '../../../models';
import {
    transactionsCreate,
    transactionsCreateReset,
    transactionsList,
} from '../../../store/transactions';

export const TransactionCreateForm = () => {
    const dispatch = useDispatch();

    const transaction_create_status = useSelector(
        (state: StateType) => state.transactions.transactions_create_status
    );

    useEffect(() => {
        if (transaction_create_status === StatusEnum.SUCCESS) {
            toast('Transação realizada com sucesso!', {
                type: 'success',
            });
            dispatch(accountsBalance());
            dispatch(transactionsCreateReset());
            dispatch(closeTransactionsModal());
            dispatch(transactionsList(nullTransactionsListRequestModel));
        }
    }, [transaction_create_status, dispatch]);

    const onSubmit = useCallback((values: TransactionsCreateRequestModel) => {
        dispatch(transactionsCreate(values));
    }, []);

    return (
        <FormStyles.Container>
            <FormStyles.Form onSubmit={(event) => event.preventDefault()}>
                <Formik
                    initialValues={nullTransactionsCreateRequestModel}
                    onSubmit={(values, { resetForm }) => {
                        onSubmit(values);
                        resetForm();
                    }}
                    validationSchema={CreateTransactionSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <>
                            <FormStyles.Title mb="16px">
                                Transferência
                            </FormStyles.Title>
                            <FormStyles.Fieldset>
                                <TextField
                                    type={'text'}
                                    label={'Nome de usuário do destinatário'}
                                    value={values.creditedAccountUsername.toString()}
                                    onChange={handleChange(
                                        'creditedAccountUsername'
                                    )}
                                    placeholder={
                                        'Digite o nome de usuário do destinatário'
                                    }
                                    onBlur={handleBlur(
                                        'creditedAccountUsername'
                                    )}
                                    autoComplete={'off'}
                                />
                                {errors.creditedAccountUsername &&
                                    touched.creditedAccountUsername && (
                                        <ErrorMessage>
                                            {errors.creditedAccountUsername}
                                        </ErrorMessage>
                                    )}
                                <TextField
                                    type={'number'}
                                    label={'Valor da transferência (R$)'}
                                    value={values.value.toString()}
                                    onChange={handleChange('value')}
                                    placeholder={
                                        'Digite o valor da transferência'
                                    }
                                    onBlur={handleBlur('value')}
                                    autoComplete={'off'}
                                    onlyIntegers={false}
                                />
                                {errors.value && touched.value && (
                                    <ErrorMessage>{errors.value}</ErrorMessage>
                                )}
                                <Button
                                    type={'submit'}
                                    mt={'16px'}
                                    onClick={() => handleSubmit()}
                                    disabled={
                                        errors.creditedAccountUsername !==
                                            undefined ||
                                        errors.value !== undefined
                                    }
                                >
                                    Transferir
                                </Button>
                            </FormStyles.Fieldset>
                        </>
                    )}
                </Formik>
            </FormStyles.Form>
        </FormStyles.Container>
    );
};
