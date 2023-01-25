import React from 'react';
import { featureAble, featureNotAble } from '../../utils/constants';
import FeatureList from '../feature-list';

export default function SidebarInfo() {
	return (
		<div className="container max-w-fit px-10 border-r border-[#E8EAF2] text-black bg-[#F5F6FA]">
			<div className="mt-10 mb-11">
				<img src="/logo.png" alt="logo" />
			</div>
			<h2 className="font-lato text-[32px] leading-[41px] font-bold">
				What does your free trial include?
			</h2>
			<div className="mt-7 mb-[38px]">
				<h4 className="font-bold text-xl text-black/[.87] mb-[15px]">
					For 7 days, you get access to BLAZINGWA's Sandbox Account.
				</h4>
				<p className="text-[17px] leading-[26px] text-black/[.87]">
					This means that you can use any active WhatsApp number to
					learn all about BLAZINGWA's exciting features like:
				</p>
			</div>
			<FeatureList list={featureAble} />
			<h5 className="text-black/[.87] text-[17px] leading-5 font-bold mt-9 mb-[25.98px]">
				Our free trial is not a customer facing product.
			</h5>
			<h5 className="text-black/[.87] text-[17px] leading-5 font-bold mb-[25.98px]">
				You WILL NOT be able to
			</h5>
			<FeatureList list={featureNotAble} />
			<h5 className="text-black/[.87] text-[17px] leading-5 font-bold mt-9 mb-[50px]">
				To use our free trial version, you do not need Facebook
				Verification or WhatsApp API registration.
			</h5>
			&nbsp;
		</div>
	);
}
