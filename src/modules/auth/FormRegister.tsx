import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup, SelectCountry, TextField } from '../../components';
import { Country } from '../../components/form/SelectCountry';
import { createMember } from '../../services/auth.service';
import { getCountries } from '../../services/country.service';

export default function FormRegister() {
	const [countries, setCountries] = React.useState<Country[]>([]);
	const { register, control, handleSubmit } = useForm();
	const navigate = useNavigate();

	const onSubmit = async (data: any) => {
		const { country, ...payload } = data;
		payload.country = country.iso;
		payload.mobile_code = country.iso;

		const result = await createMember(payload);

		if (result.status === 'ok') {
			navigate('/register-package', {
				state: { user_id: result.data.id },
			});
			return;
		}
	};

	React.useEffect(() => {
		const getListCountry = async () => {
			const result = await getCountries();
			if (result.status === 'ok') {
				setCountries(result.data.countries);
			}
		};

		getListCountry();
	}, []);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="first-of-type:mt-7">
			<div className="flex gap-[21px] justify-between mb-5">
				<FormGroup>
					<TextField
						name="firstname"
						label="First Name*"
						placeholder="Enter your first name"
						register={register}
					/>
				</FormGroup>
				<FormGroup>
					<TextField
						name="lastname"
						label="Last Name*"
						placeholder="Enter your last name"
						register={register}
					/>
				</FormGroup>
			</div>
			<FormGroup className="mb-5">
				<TextField
					name="email"
					type="email"
					label="Email"
					placeholder="Enter your email"
					className="w-full"
					register={register}
				/>
			</FormGroup>
			<FormGroup className="mb-5 relative">
				<SelectCountry
					countries={countries}
					name="country"
					control={control}
					label="Country"
				/>
			</FormGroup>
			<FormGroup className="mb-5">
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
					<TextField
						name="mobile"
						type="number"
						placeholder="Phone number"
						className="w-full"
						register={register}
					/>
				</div>
			</FormGroup>
			<div className="flex gap-[21px] justify-between">
				<FormGroup>
					<label
						htmlFor=""
						className="block text-[15.4px] leading-5 text-[#666666] font-semibold mb-[6.98px]"
					>
						Password
					</label>
					<div className="relative">
						<TextField
							name="password"
							type="password"
							placeholder="Enter your password"
							register={register}
						/>
						<span className="before:content-[url('/icons/hidden.svg')] before:mt-1 absolute right-0 w-[45px] h-full inline-flex items-center justify-center bg-white border border-[#F5F6FA] rounded-[5px]"></span>
					</div>
				</FormGroup>
				<div>
					<label
						htmlFor=""
						className="block text-[15.4px] leading-5 text-[#666666] font-semibold mb-[6.98px]"
					>
						Confirm Password
					</label>
					<div className="relative">
						<TextField
							name="password_confirmation"
							type="password"
							placeholder="Confirm your password"
							register={register}
						/>
						<span className="before:content-[url('/icons/hidden.svg')] before:mt-1 absolute right-0 w-[45px] h-full inline-flex items-center justify-center bg-white border border-[#F5F6FA] rounded-[5px]"></span>
					</div>
				</div>
			</div>
			<div className="flex gap-[14px] mt-9 mb-5">
				<input type="checkbox" />
				<label htmlFor="" className="text-[#666666] text-sm">
					I agree to{' '}
					<span className="text-[#23A455]">Terms and conditions</span>{' '}
					and <span className="text-[#23A455]">Privacy Policy</span>
				</label>
			</div>
			<Button
				type="submit"
				label="Create an account"
				variant="secondary"
				isFull
			/>
		</form>
	);

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
				{/* <Listbox value={selectedPerson} onChange={setSelectedPerson}>
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
				</Listbox> */}
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
				<input type="checkbox" />
				<label htmlFor="" className="text-[#666666] text-sm">
					I agree to{' '}
					<span className="text-[#23A455]">Terms and conditions</span>{' '}
					and <span className="text-[#23A455]">Privacy Policy</span>
				</label>
			</div>
			<Button label="Create an account" variant="secondary" isFull />
		</form>
	);
}
