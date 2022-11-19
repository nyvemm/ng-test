import * as yup from 'yup';

const LoginSchema = yup.object().shape({
    username: yup.string().required('O campo de usuário é obrigatório'),
    password: yup.string().required('O campo de senha é obrigatório'),
});

export default LoginSchema;
