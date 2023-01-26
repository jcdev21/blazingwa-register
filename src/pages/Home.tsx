import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Home() {
	const { accessToken } = useAuth();

	if (!accessToken) return <Navigate to="/register" />;

	return (
		<div className="container h-screen flex flex-col justify-center items-center">
			<h1>LOGIN PAGE</h1>
		</div>
	);
}
