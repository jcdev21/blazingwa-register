import React from 'react';
import DropdownLanguage from '../dropdown-language';

export default function Topbar() {
	return (
		<div className="container flex justify-end mt-9">
			<DropdownLanguage />
		</div>
	);
}
