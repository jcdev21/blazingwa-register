import { Tab } from '@headlessui/react';
import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import SidebarInfo from '../components/layouts/SidebarInfo';
import Topbar from '../components/layouts/Topbar';
import usePackage from '../hooks/usePackage';
import RegisterPackageChoose from '../modules/package/RegisterPackageChoose';

export default function RegisterPackage() {
	const navigate = useNavigate();
	const location = useLocation();
	const { user_id, package_id, payment_id, dispatch, getListPackage } =
		usePackage();

	const [packages, setPackages] = React.useState<Array<any>>([]);

	React.useEffect(() => {
		if (!location.state?.user_id) return;

		dispatch({
			type: 'SET_USER_ID',
			payload: { user_id: location.state?.user_id },
		});
	}, [location.state?.user_id]);

	React.useEffect(() => {
		getListPackage().then((data) => {
			setPackages(data);
		});
	}, [getListPackage]);

	if (!location.state?.user_id) return <Navigate to="/register" />;

	return (
		<div className="min-h-screen flex flex-col sm:flex-row">
			<SidebarInfo />
			<div className="w-full container bg-white">
				<Topbar />
				<Tab.Group>
					<Tab.Panels>
						<Tab.Panel>
							<RegisterPackageChoose packages={packages} />
						</Tab.Panel>
						<Tab.Panel>PAYMENT</Tab.Panel>
					</Tab.Panels>

					<Tab.List className="flex justify-center rounded-2xl overflow-hidden mt-9">
						<button
							type="button"
							className="w-1/2 flex gap-5 justify-end items-center py-5 px-8 border-t border-[#E9E9E9]"
							onClick={() => navigate(-1)}
						>
							<img src="/icons/arrow-left.svg" alt="arror left" />
							<span className="text-base text-[#646464] leading-5 font-bold">
								Sebelumnya
							</span>
						</button>
						<Tab className="w-1/2 flex gap-5 justify-end items-center py-5 px-8 border-t border-[#E9E9E9]">
							<img src="/icons/arrow-left.svg" alt="arror left" />
							<span className="text-base text-[#646464] leading-5 font-bold">
								Sebelumnya
							</span>
						</Tab>
						<Tab className="w-1/2 flex gap-5 justify-start items-center py-5 px-8 bg-[#0583FF]">
							<span className="text-base text-white leading-5 font-bold">
								Selanjutnya
							</span>
							<img
								src="/icons/arrow-right.svg"
								alt="arror left"
							/>
						</Tab>
						<button className="w-1/2 flex gap-5 justify-start items-center py-5 px-8 bg-[#0583FF]">
							<span className="text-base text-white leading-5 font-bold">
								Selanjutnya
							</span>
							<img
								src="/icons/arrow-right.svg"
								alt="arror left"
							/>
						</button>
					</Tab.List>
				</Tab.Group>
			</div>
		</div>
	);
}
