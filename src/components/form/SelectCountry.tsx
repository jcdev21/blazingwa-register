import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import type { SelectPropsType } from '../../types/form.type';

export type Country = {
	id: number;
	shortname: string;
	name: string;
	iso: number;
};

export default function SelectCountry({
	name,
	label,
	isLabelBold = false,
	className = '',
	countries = [],
	...restProps
}: SelectPropsType &
	UseControllerProps & {
		countries: Array<Country>;
	}) {
	const {
		field: { value, onChange },
	} = useController({ name, ...restProps });

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
			<Listbox value={value} onChange={onChange}>
				<Listbox.Button className="relative cursor-default text-sm leading-[21px] bg-[#F5F6FA] rounded-[5px] p-[15px] w-full text-left flex justify-between items-center text-[#D1D1D1]">
					<span
						className={clsx(
							'block truncate',
							value && 'text-black'
						)}
					>
						{value ? value.name : 'Choose your country'}
					</span>
					<img src="icons/chevron-down.svg" alt="Icon Chevron Down" />
				</Listbox.Button>
				<Listbox.Options className="absolute w-full mt-1 max-h-60 overflow-auto bg-[#F5F6FA] rounded-[5px] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
					{countries.map((country) => (
						<Listbox.Option
							key={country.id}
							value={country}
							className="py-1 px-2"
						>
							{country.name}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</>
	);
}
