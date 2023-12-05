import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import * as React from 'react';
import {
	ccyFormat,
	formatCurrencyUSD,
	subtotalByProperty,
} from '../../../common/utils';
import { COLORS } from '../../../common/constants';

const rows = [
	{
		campaigns: 'Cosmetics',
		clicks: 712,
		cost: 4272,
		conversions: 8,
		revenue: 16568,
	},
	{
		campaigns: 'Serums',
		clicks: 3961,
		cost: 27331,
		conversions: 115,
		revenue: 362526,
	},
	{
		campaigns: 'Facewash',
		clicks: 9462,
		cost: 76831,
		conversions: 123,
		revenue: 266800,
	},

	{
		campaigns: 'Shampoos',
		clicks: 439,
		cost: 2151,
		conversions: 5,
		revenue: 11029,
	},
	{
		campaigns: 'Conditioners',
		clicks: 1680,
		cost: 3864,
		conversions: 49,
		revenue: 175245,
	},
	{
		campaigns: 'Facewash 2',
		clicks: 4978,
		cost: 29370,
		conversions: 189,
		revenue: 623106,
	},
];

const DataTable = () => {
	const [orderBy, setOrderBy] = React.useState<string>('');
	const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');

	const sortedRows = rows.sort((a: any, b: any) => {
		const aValue = a[orderBy];
		const bValue = b[orderBy];
		if (typeof aValue === 'string') {
			return order === 'asc'
				? aValue.localeCompare(bValue)
				: bValue.localeCompare(aValue);
		}
		return order === 'asc' ? aValue - bValue : bValue - aValue;
	});

	const totalClicks = subtotalByProperty(sortedRows, 'clicks');
	const totalCost = subtotalByProperty(sortedRows, 'cost');
	const totalConversions = subtotalByProperty(sortedRows, 'conversions');
	const totalRevenue = subtotalByProperty(sortedRows, 'revenue');

	const handleSortRequest = (property: string) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	return (
		<TableContainer className="insightsTableWrapper">
			<Table sx={{ minWidth: 700 }} aria-label="insights data table">
				<TableHead>
					<TableRow>
						<TableCell align="left" colSpan={4}>
							Ad Insights
						</TableCell>
						<TableCell align="right">
							<IconButton>
								<HelpOutlineIcon />
							</IconButton>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<TableSortLabel
								active={orderBy === 'campaigns'}
								direction={orderBy === 'campaigns' ? order : 'asc'}
								onClick={() => handleSortRequest('campaigns')}>
								{/* Campaigns */}
								Campaigns
							</TableSortLabel>
						</TableCell>
						<TableCell align="right">
							<TableSortLabel
								active={orderBy === 'clicks'}
								direction={orderBy === 'clicks' ? order : 'asc'}
								onClick={() => handleSortRequest('clicks')}>
								Clicks
							</TableSortLabel>
						</TableCell>
						<TableCell align="right">
							<TableSortLabel
								active={orderBy === 'cost'}
								direction={orderBy === 'cost' ? order : 'asc'}
								onClick={() => handleSortRequest('cost')}>
								Cost
							</TableSortLabel>
						</TableCell>
						<TableCell align="right">
							<TableSortLabel
								active={orderBy === 'conversions'}
								direction={orderBy === 'conversions' ? order : 'asc'}
								onClick={() => handleSortRequest('conversions')}>
								Conversions
							</TableSortLabel>
						</TableCell>

						<TableCell align="right">
							<TableSortLabel
								active={orderBy === 'revenue'}
								direction={orderBy === 'revenue' ? order : 'asc'}
								onClick={() => handleSortRequest('revenue')}>
								Revenue
							</TableSortLabel>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{sortedRows.map((row) => (
						<TableRow key={row.campaigns}>
							<TableCell>{row.campaigns}</TableCell>
							<TableCell align="right">{row.clicks}</TableCell>
							<TableCell align="right">{formatCurrencyUSD(row.cost)}</TableCell>
							<TableCell align="right">{ccyFormat(row.conversions)}</TableCell>
							<TableCell align="right">
								{formatCurrencyUSD(row.revenue)}
							</TableCell>
						</TableRow>
					))}
					<TableRow sx={{ backgroundColor: COLORS.colorBackground }}>
						<TableCell>Subtotal</TableCell>
						<TableCell align="right">{totalClicks}</TableCell>
						<TableCell align="right">
							{formatCurrencyUSD(Number(totalCost))}
						</TableCell>
						<TableCell align="right">
							{ccyFormat(Number(totalConversions))}
						</TableCell>
						<TableCell align="right">
							{formatCurrencyUSD(Number(totalRevenue))}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataTable;
