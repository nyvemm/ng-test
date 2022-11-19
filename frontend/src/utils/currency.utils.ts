export const formatCurrency = (value: string | number, hidden?: boolean) => {
    const parsedValue = parseValue(value);

    if (hidden) {
        return 'R$ *****';
    }

    return parsedValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
};

export const parseValue = (value: string | number) => {
    if (typeof value === 'string' && value === '') {
        return 0;
    } else if (typeof value === 'number') {
        return value;
    }

    try {
        return parseFloat(value);
    } catch (error) {
        return 0;
    }
};
