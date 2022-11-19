import React, { useCallback, useEffect } from 'react';
import { Formik } from 'formik';
import { TextField, Button, ErrorMessage } from '../../atoms';
import * as FormStyles from '../../../styles/shared/formStyles';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../store/user';
import { StateType } from '../../../store/reducers';
import {
    LoginSchema,
    nullUserLoginRequestModel,
    StatusEnum,
    UserLoginRequestModel,
} from '../../../models';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const login_status = useSelector(
        (state: StateType) => state.users.user_login_status
    );

    const onSubmit = useCallback((values: UserLoginRequestModel) => {
        dispatch(userLogin(values));
    }, []);

    useEffect(() => {
        if (login_status === StatusEnum.SUCCESS) {
        }
    });

    return (
        <FormStyles.Container>
            <FormStyles.Form onSubmit={(event) => event.preventDefault()}>
                <Formik
                    initialValues={nullUserLoginRequestModel}
                    onSubmit={(values, { resetForm }) => {
                        onSubmit(values);
                        resetForm();
                    }}
                    validationSchema={LoginSchema}
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
                            <FormStyles.Title> Entrar</FormStyles.Title>
                            <FormStyles.Fieldset>
                                <TextField
                                    type={'text'}
                                    label={'Usuário'}
                                    value={values.username}
                                    onChange={handleChange('username')}
                                    placeholder={'Digite seu usuário'}
                                    onBlur={handleBlur('username')}
                                    autoComplete={'username'}
                                />
                                {errors.username && touched.username && (
                                    <ErrorMessage>
                                        {errors.username}
                                    </ErrorMessage>
                                )}
                                <TextField
                                    type={'password'}
                                    label={'Senha'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    placeholder={'Digite sua senha'}
                                    onBlur={handleBlur('password')}
                                    autoComplete={'current-password'}
                                />
                                {errors.password && touched.password && (
                                    <ErrorMessage>
                                        {errors.password}
                                    </ErrorMessage>
                                )}
                            </FormStyles.Fieldset>
                            <FormStyles.LinkContainer>
                                Ainda não tem uma conta?{' '}
                                <FormStyles.Link to={'/signup'}>
                                    Cadastre-se
                                </FormStyles.Link>
                            </FormStyles.LinkContainer>
                            <Button
                                type={'submit'}
                                disabled={
                                    errors.username !== undefined ||
                                    errors.password !== undefined
                                }
                                onClick={() => {
                                    handleSubmit();
                                }}
                            >
                                Entrar
                            </Button>
                        </>
                    )}
                </Formik>
            </FormStyles.Form>
        </FormStyles.Container>
    );
};
