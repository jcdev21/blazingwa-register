import { Navigate } from 'react-router-dom';
import SidebarInfo from '../components/layouts/SidebarInfo';
import Topbar from '../components/layouts/Topbar';
import useAuth from '../hooks/useAuth';
import WrapperFormRegister from '../modules/auth/WrapperFormRegister';

export default function Register() {
	const { accessToken } = useAuth();

	if (accessToken) return <Navigate to="/" />;

	return (
		<div className="min-h-screen flex flex-col sm:flex-row">
			<SidebarInfo />
			<div className="w-full container bg-white">
				<Topbar />
				<WrapperFormRegister />
			</div>
		</div>
	);
}
