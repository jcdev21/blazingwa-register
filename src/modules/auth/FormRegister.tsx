import { Listbox } from '@headlessui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CustomForm, TextField } from '../../components';

const people = [
	{ id: 1, name: 'Durward Reynolds', unavailable: false },
	{ id: 2, name: 'Kenton Towne', unavailable: false },
	{ id: 3, name: 'Therese Wunsch', unavailable: false },
	{ id: 4, name: 'Benedict Kessler', unavailable: true },
	{ id: 5, name: 'Katelyn Rohan', unavailable: false },
];

export default function FormRegister() {
	const [selectedPerson, setSelectedPerson] = React.useState(people[0]);

	return (
		<form action="" className="first-of-type:mt-7">
			<div className="flex gap-[21px] justify-between mb-5">
				<div>
					<label
						htmlFor=""
						className="block text-[15.4px] leading-5 text-[#666666] font-semibold mb-[6.98px]"
					>
						First Name*
					</label>
					<input
						placeholder="Enter your first name"
						className="placeholder:text-[#D1D1D1] text-sm leading-[21px] bg-[#F5F6FA] rounded-[5px] p-[15px]"
					/>
				</div>
				<div>
					<label
						htmlFor=""
						className="block text-[15.4px] leading-5 text-[#666666] font-semibold mb-[6.98px]"
					>
						Last Name*
					</label>
					<input
						placeholder="Enter your last name"
						className="placeholder:text-[#D1D1D1] text-sm leading-[21px] bg-[#F5F6FA] rounded-[5px] p-[15px]"
					/>
				</div>
			</div>
			<div className="mb-5">
				<label
					htmlFor=""
					className="block text-[15.4px] leading-5 text-[#666666] font-semibold mb-[6.98px]"
				>
					Email
				</label>
				<input
					placeholder="Enter your email"
					className="placeholder:text-[#D1D1D1] text-sm leading-[21px] bg-[#F5F6FA] rounded-[5px] p-[15px] w-full"
				/>
			</div>
			<div className="mb-5 relative">
				<label
					htmlFor=""
					className="block text-[15.4px] leading-5 text-[#666666] font-semibold mb-[6.98px]"
				>
					Country
				</label>
				<Listbox value={selectedPerson} onChange={setSelectedPerson}>
					<Listbox.Button className="relative cursor-default text-sm leading-[21px] bg-[#F5F6FA] rounded-[5px] p-[15px] w-full text-left flex justify-between items-center text-[#D1D1D1]">
						<span className="block truncate">
							{selectedPerson.name}
						</span>
						<img
							src="icons/chevron-down.svg"
							alt="Icon Chevron Down"
						/>
					</Listbox.Button>
					<Listbox.Options className="absolute w-full mt-1 max-h-60 overflow-auto bg-[#F5F6FA] rounded-[5px] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{people.map((person) => (
							<Listbox.Option
								key={person.id}
								value={person}
								disabled={person.unavailable}
							>
								{person.name}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Listbox>
			</div>
			<div className="mb-5">
				<label
					htmlFor=""
					className="block text-[15.4px] leading-5 text-[#666666] font-semibold mb-[6.98px]"
				>
					Whatsapp Number (with country code)*
				</label>
				<div className="flex gap-[14px] justify-around items-stretch">
					<div className="bg-[#F5F6FA] rounded-[5px] flex justify-center items-center px-4">
						<img src="/icons/telepone.svg" alt="telepone" />
					</div>
					<input
						placeholder="Phone Number"
						className="placeholder:text-[#D1D1D1] text-sm leading-[21px] bg-[#F5F6FA] rounded-[5px] p-[15px] w-full"
					/>
				</div>
			</div>
			<div className="flex gap-[21px] justify-between">
				<div>
					<label
						htmlFor=""
						className="block text-[15.4px] leading-5 text-[#666666] font-semibold mb-[6.98px]"
					>
						Password
					</label>
					<div className="relative">
						<input
							placeholder="Enter your password"
							className="placeholder:text-[#D1D1D1] text-sm leading-[21px] bg-[#F5F6FA] rounded-[5px] p-[15px]"
						/>
						<span className="before:content-[url('/icons/hidden.svg')] before:mt-1 absolute right-0 w-[45px] h-full inline-flex items-center justify-center bg-white border border-[#F5F6FA] rounded-[5px]"></span>
					</div>
				</div>
				<div>
					<label
						htmlFor=""
						className="block text-[15.4px] leading-5 text-[#666666] font-semibold mb-[6.98px]"
					>
						Confirm Password
					</label>
					<div className="relative">
						<input
							placeholder="Confirm your password"
							className="placeholder:text-[#D1D1D1] text-sm leading-[21px] bg-[#F5F6FA] rounded-[5px] p-[15px]"
						/>
						<span className="before:content-[url('/icons/hidden.svg')] before:mt-1 absolute right-0 w-[45px] h-full inline-flex items-center justify-center bg-white border border-[#F5F6FA] rounded-[5px]"></span>
					</div>
				</div>
			</div>
			<div className="flex gap-[14px] mt-9 mb-5">
				<input type="checkbox" className="" />
				<label htmlFor="" className="text-[#666666] text-sm">
					I agree to{' '}
					<span className="text-[#23A455]">Terms and conditions</span>{' '}
					and <span className="text-[#23A455]">Privacy Policy</span>
				</label>
			</div>
			<button className="w-full bg-[#E7E7E7] h-[60px] border-[5px] text-[#666666]">
				Create an account
			</button>
		</form>
	);
}
