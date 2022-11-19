export type Option = {
    value: string;
    label: string;
};

export type ButtonGroupProps = {
    options: Option[];
    selectedValue: string;
    onChange: (value: string) => void;
};
