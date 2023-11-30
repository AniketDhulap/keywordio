import { Navigate, createBrowserRouter } from 'react-router-dom';
import PageLayout from './PageLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/dashboard" replace />,
	},
	{
		element: <PageLayout />,
		children: [{ path: '/dashboard', element: <h1>Dashboard</h1> }],
	},
]);
