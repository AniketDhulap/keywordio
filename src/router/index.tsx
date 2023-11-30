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
	{
		element: <PageLayout />,
		children: [{ path: '/create-ads', element: <h1>create-ads</h1> }],
	},
]);
