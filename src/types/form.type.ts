export type FormContextType = {
	dataForm: { [key: string]: string };
	setDataForm: (name: string, value: string) => void;
};

type CommonFieldType = {
	name: string;
	label?: string;
	isLabelBold?: boolean;
	placeholder?: string;
	className?: string;
	defaultValue?: string;
};

export type TextFieldPropsType = CommonFieldType & {
	type?: 'text' | 'number' | 'email' | 'password';
};

export type SelectPropsType = Omit<
	CommonFieldType,
	'name' | 'placeholder' | 'defaultValue'
>;
