import React from 'react';

type PackageChoosePropsType = {
	packages: Array<any>;
};

export default function RegisterPackageChoose({
	packages,
}: PackageChoosePropsType) {
	return (
		<div className="flex justify-around">
			{packages.length > 0
				? packages.map((pckg: any, idx: number) => (
						<div
							key={idx}
							className="max-w-[353px] w-full bg-white border-2 border-[#0082FF] shadow-lg rounded-[10px] p-4"
						>
							<h2 className="text-[#1C1C1C] text-[28px] leading-[53px] font-semibold text-center">
								{pckg.name}
							</h2>
							<div className="flex justify-center">
								<button className="bg-[#0082FF] border-[3px] border-[#0082FF] shadow-lg rounded-[50px] font-semibold text-base leading-7 text-white py-1 px-3">
									Choose
								</button>
							</div>
						</div>
				  ))
				: null}
		</div>
	);
}
