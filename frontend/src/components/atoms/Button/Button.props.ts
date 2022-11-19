export type ButtonProps = {
    children: string;
    disabled?: boolean;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    mt?: string;
};
