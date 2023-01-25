import React from 'react';
import { Link } from 'react-router-dom';
import FormRegister from './FormRegister';

export default function WrapperFormRegister() {
	return (
		<div className="-mt-6 mx-20 2xl:mx-40">
			<h1 className="text-[30.8px] leading-[43px] text-[#23A455] font-semibold mb-[30.98px]">
				Start your free trial
			</h1>
			<button
				type="button"
				className="before:content-[url('/icons/arrow-back-nav.svg')] before:mr-[7px] text-sm text-[#0E71C3]"
			>
				Back
			</button>
			<FormRegister />
			<div className="my-5 text-center">
				<p className="text-black/[.87] text-[15.4px] leading-[21px]">
					Already have an account?{' '}
					<Link to="/login" className="text-[#23A455]">
						Login
					</Link>
				</p>
			</div>
			<div className="flex justify-center gap-[14px] mb-[50px]">
				<img src="/images/apple-store.png" alt="apple store" />
				<img
					src="/images/google-play-store.png"
					alt="google play store"
				/>
			</div>
			&nbsp;
		</div>
	);
}
