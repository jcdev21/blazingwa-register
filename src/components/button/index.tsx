import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
	type?: 'button' | 'submit';
	label: string;
	size?: 'default' | 'small' | 'large';
	variant?: 'primary' | 'secondary';
	isDisabled?: boolean;
	isFull?: boolean;
	onClick?: () => void;
};

const buttonStyles = 'px-9 py-5 leading-6 rounded-[5px]';

export default function Button({
	type = 'button',
	label,
	size = 'default',
	variant = 'primary',
	isDisabled = false,
	isFull = false,
	onClick = () => {},
}: ButtonProps) {
	const className = clsx(
		buttonStyles,
		{
			['text-sm']: size === 'small',
			['text-base']: size === 'default',
			['text-lg']: size === 'large',
		},
		{
			['bg-[#23A455] text-white']: variant === 'primary',
			['bg-[#E7E7E7] text-[#666666]']: variant === 'secondary',
		},
		isFull && 'w-full'
	);

	return (
		<button
			type={type}
			className={className}
			disabled={isDisabled}
			onClick={() => onClick()}
		>
			{label}
		</button>
	);
}
