import { Navigate, useNavigate } from 'react-router-dom';
import DropdownLanguage from '../components/dropdown-language';
import SidebarInfo from '../components/layouts/SidebarInfo';
import Topbar from '../components/layouts/Topbar';
import useAuth from '../hooks/useAuth';
import FormRegister from '../modules/auth/FormRegister';
import WrapperFormRegister from '../modules/auth/WrapperFormRegister';
import { createUser } from '../services/auth.service';

export default function Register() {
	const navigate = useNavigate();
	const { accessToken, dispatch } = useAuth();

	const handleRegister = async (values: { [key: string]: string }) => {
		const payload = {
			name: values.name,
			email: values.email,
			password: values.password,
			password_confirmation: values.password,
		};

		const result = await createUser(payload);
		console.log(result);

		if (result.error) {
			alert(result.message);
			return;
		}

		localStorage.setItem('access-token', JSON.stringify(result.auth_token));
		dispatch({
			type: 'LOGIN',
			payload: {
				accessToken: result.auth_token,
			},
		});

		navigate('/');
	};

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
