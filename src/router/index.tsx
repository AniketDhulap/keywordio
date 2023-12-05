import { Navigate, createBrowserRouter } from 'react-router-dom';

import NotFoundPage from '../modules/NotFound';
import CreateAds from '../modules/CreateAds';
import Dashboard from '../modules/Dashboard';
import PageLayout from './PageLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/dashboard" replace />,
	},
	{
		element: <PageLayout />,
		children: [{ path: '/dashboard', element: <Dashboard /> }],
	},
	{
		element: <PageLayout />,
		children: [{ path: '/create-ads', element: <CreateAds /> }],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);
