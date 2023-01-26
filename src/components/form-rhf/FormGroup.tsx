import React from 'react';

type FormGroupType = {
	children: React.ReactNode;
	className?: string;
};

export default function FormGroup({ children, className = '' }: FormGroupType) {
	return <div className={className}>{children}</div>;
}
