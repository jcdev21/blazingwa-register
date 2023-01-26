import clsx from 'clsx';
import React from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import type { TextFieldPropsType } from '../../types/form.type';

export default function TextFieldRHF(
	props: TextFieldPropsType & {
		register: UseFormRegister<FieldValues>;
	}
) {
	const {
		name,
		type = 'text',
		label,
		isLabelBold = false,
		placeholder,
		className = '',
		register,
	} = props;

	const classNames = clsx(
		'placeholder:text-[#D1D1D1] text-sm leading-[21px] bg-[#F5F6FA] rounded-[5px] p-[15px]',
		className
	);

	return (
		<>
			{label ? (
				<label
					htmlFor=""
					className={clsx(
						'block text-[15.4px] leading-5 text-[#666666] font-semibold mb-[6.98px]',
						isLabelBold && 'font-bold'
					)}
				>
					{label}
				</label>
			) : null}
			<input
				type={type}
				placeholder={placeholder}
				className={classNames}
				{...register(name)}
			/>
		</>
	);
}
