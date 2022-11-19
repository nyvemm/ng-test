import React from 'react';

export type TextFieldProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    type: 'text' | 'password' | 'number';
    autoComplete?: string;
    onlyIntegers?: boolean;
};
