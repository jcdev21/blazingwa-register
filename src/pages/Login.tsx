import { Link, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Login() {
	const { accessToken } = useAuth();

	if (accessToken) return <Navigate to="/" />;

	return (
		<div className="container h-screen flex flex-col justify-center items-center">
			<h1>LOGIN PAGE</h1>
			<Link to="/register">Register</Link>
		</div>
	);
}
