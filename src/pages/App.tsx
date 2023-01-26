import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuardRoute from '../modules/auth/GuardRoute';
import PackageProvider from '../modules/package/PackageContext';
import NotFound from './404';

const Home = React.lazy(() => import('./Home'));
const RegisterPackage = React.lazy(() => import('./RegisterPackage'));
const Register = React.lazy(() => import('./Register'));
const Login = React.lazy(() => import('./Login'));

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<GuardRoute />}>
					<Route
						path="/"
						element={
							<React.Suspense fallback={<></>}>
								<Home />
							</React.Suspense>
						}
					/>
				</Route>
				<Route
					path="/register-package"
					element={
						<React.Suspense fallback={<></>}>
							<PackageProvider>
								<RegisterPackage />
							</PackageProvider>
						</React.Suspense>
					}
				/>
				<Route
					path="/register"
					element={
						<React.Suspense fallback={<></>}>
							<Register />
						</React.Suspense>
					}
				/>
				<Route
					path="/login"
					element={
						<React.Suspense fallback={<></>}>
							<Login />
						</React.Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
