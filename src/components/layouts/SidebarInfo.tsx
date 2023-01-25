import React from 'react';

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
			<ul>
				<li className="flex gap-5 text-[17px] leading-6 text-black/[.87] before:content-[url('/icons/check-list.svg')] mb-[8.98px]">
					Multi-Agent Inbox & Support Dashboard overview
				</li>
				<li className="flex gap-5 text-[17px] leading-6 text-black/[.87] before:content-[url('/icons/check-list.svg')] mb-[8.98px]">
					WhatsApp Broadcast (to your own number)
				</li>
				<li className="flex gap-5 text-[17px] leading-6 text-black/[.87] before:content-[url('/icons/check-list.svg')] mb-[8.98px]">
					CRM & Contact Management tour
				</li>
				<li className="flex gap-5 text-[17px] leading-6 text-black/[.87] before:content-[url('/icons/check-list.svg')] mb-[8.98px]">
					Third Party Integrations with tools like Shopify, Google
					Sheets, etc.
				</li>
			</ul>
			<h5 className="text-black/[.87] text-[17px] leading-5 font-bold mt-9 mb-[25.98px]">
				Our free trial is not a customer facing product.
			</h5>
			<h5 className="text-black/[.87] text-[17px] leading-5 font-bold mb-[25.98px]">
				You WILL NOT be able to
			</h5>
			<ul>
				<li className="flex gap-5 text-[17px] leading-6 text-black/[.87] before:content-[url('/icons/close.svg')] mb-[8.98px]">
					Build Chatbot or Automation Flows
				</li>
				<li className="flex gap-5 text-[17px] leading-6 text-black/[.87] before:content-[url('/icons/close.svg')] mb-[8.98px]">
					Create New Templates
				</li>
				<li className="flex gap-5 text-[17px] leading-6 text-black/[.87] before:content-[url('/icons/close.svg')] mb-[8.98px]">
					Set up your own WhatsApp number
				</li>
				<li className="flex gap-5 text-[17px] leading-6 text-black/[.87] before:content-[url('/icons/close.svg')] mb-[8.98px]">
					Send messages to your customers
				</li>
			</ul>
			<h5 className="text-black/[.87] text-[17px] leading-5 font-bold mt-9 mb-[50px]">
				To use our free trial version, you do not need Facebook
				Verification or WhatsApp API registration.
			</h5>
			&nbsp;
		</div>
	);
}
