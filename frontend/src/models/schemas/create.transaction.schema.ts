import * as yup from 'yup';

const CreateTransactionSchema = yup.object().shape({
    creditedAccountUsername: yup
        .string()
        .required('O campo do usuário é obrigatório'),
    value: yup
        .number()
        .required('O campo de valor é obrigatório')
        .min(0.01, 'O campo de valor deve ser maior que 0'),
});

export default CreateTransactionSchema;
