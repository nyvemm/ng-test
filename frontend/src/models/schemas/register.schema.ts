import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
    username: yup
        .string()
        .required('O campo de usuário é obrigatório')
        .min(3, 'O campo de usuário deve ter no mínimo 3 caracteres'),
    password: yup
        .string()
        .required('O campo de senha é obrigatório')
        .min(8, 'O campo de senha deve ter no mínimo 8 caracteres'),
    confirmPassword: yup
        .string()
        .required('O campo de confirmação de senha é obrigatório')
        .oneOf([yup.ref('password'), null], 'As senhas não conferem'),
});

export default RegisterSchema;
