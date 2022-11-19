import React, { useCallback, useEffect } from 'react';
import { TextField, Button, ErrorMessage } from '../../atoms';
import * as FormStyles from '../../../styles/shared/formStyles';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup, userSignupReset } from '../../../store/user';
import { StateType } from '../../../store/reducers';
import { toast } from 'react-toastify';
import {
    nullUserSignupRequestModel,
    RegisterSchema,
    StatusEnum,
    UserSignupRequestModel,
} from '../../../models';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const signup_status = useSelector(
        (state: StateType) => state.users.user_signup_status
    );

    const onSubmit = useCallback((values: UserSignupRequestModel) => {
        dispatch(userSignup(values));
    }, []);

    useEffect(() => {
        if (signup_status === StatusEnum.SUCCESS) {
            toast('Cadastro realizado com sucesso!', {
                type: 'success',
            });
            dispatch(userSignupReset());
        }
    }, [signup_status, dispatch]);

    return (
        <FormStyles.Container>
            <FormStyles.Form onSubmit={(event) => event.preventDefault()}>
                <Formik
                    initialValues={nullUserSignupRequestModel}
                    onSubmit={(values, { resetForm }) => {
                        onSubmit(values);
                        resetForm();
                    }}
                    validationSchema={RegisterSchema}
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
                            <FormStyles.Title>Criar uma conta</FormStyles.Title>
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
                                <TextField
                                    type={'password'}
                                    label={'Confirmar senha'}
                                    value={values.confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                    placeholder={'Digite sua senha novamente'}
                                    onBlur={handleBlur('confirmPassword')}
                                    autoComplete={'current-password'}
                                />
                                {errors.confirmPassword &&
                                    (values.confirmPassword.length > 0 ||
                                        touched.confirmPassword) && (
                                        <ErrorMessage>
                                            {errors.confirmPassword}
                                        </ErrorMessage>
                                    )}
                            </FormStyles.Fieldset>
                            <FormStyles.LinkContainer>
                                Já tem uma conta?{' '}
                                <FormStyles.Link to={'/'}>
                                    Clique aqui para entrar
                                </FormStyles.Link>
                            </FormStyles.LinkContainer>
                            <Button
                                type={'submit'}
                                onClick={() => handleSubmit()}
                                disabled={
                                    errors.username !== undefined ||
                                    errors.password !== undefined ||
                                    errors.confirmPassword !== undefined
                                }
                            >
                                Cadastre-se
                            </Button>
                        </>
                    )}
                </Formik>
            </FormStyles.Form>
        </FormStyles.Container>
    );
};
