export type FormContextType = {
	dataForm: { [key: string]: string };
	setDataForm: (name: string, value: string) => void;
};

export type CustomFormPropsType = {
	children: React.ReactNode;
	onSubmit: (values: { [key: string]: string }) => void;
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

export type DescriptionPropsType = CommonFieldType;
