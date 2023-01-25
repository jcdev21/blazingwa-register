import { Menu } from '@headlessui/react';
import React from 'react';

export default function DropdownLanguage() {
	return (
		<Menu>
			<Menu.Button className="bg-[#F5F6FA] rounded-[5px] px-[10px] py-[6px] flex items-center">
				<img src="/icons/english.svg" alt="flag" />
				<hr className="border border-[#EBEDF2] h-full mx-3" />
				<span className="text-sm text-black/[.87] inline-block ">
					English
				</span>
				<img
					src="/icons/chevron-down.svg"
					alt="chevron down"
					className="ml-10"
				/>
			</Menu.Button>
		</Menu>
	);
}
