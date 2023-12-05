import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TocIcon from '@mui/icons-material/Toc';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import React, { useState } from 'react';

import {
	Box,
	FormControl,
	IconButton,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { GRAPH_DATA } from '../../../common/interface';
import PieChart from '../PieChart';
import '../dashboard.scss';
import {
	ccyFormat,
	formatCurrencyUSD,
	subtotalByProperty,
} from '../../../common/utils';
import { COLORS } from '../../../common/constants';

enum TABLE_CONTENT {
	LIST = 'LIST',
	GRAPH = 'GRAPH',
}

// need to merge rows and grapTableData for table and graph

const rows = [
	{
		group: 'Male',
		clicks: 348,
		cost: 12528,
		conversions: 42,
		revenue: 62118,
	},
	{
		group: 'Female',
		clicks: 692,
		cost: 24912,
		conversions: 35,
		revenue: 5175,
	},
	{
		group: 'Unknown',
		clicks: 105,
		cost: 3943,
		conversions: 3,
		revenue: 4489,
	},
];

const grapTableData = [
	{
		name: 'Male',
		data: {
			clicks: 348,
			cost: 12528,
			conversions: 42,
			revenue: 62118,
		},
	},
	{
		name: 'Female',
		data: {
			clicks: 692,
			cost: 24912,
			conversions: 35,
			revenue: 5175,
		},
	},
	{
		name: 'unknown',
		data: {
			clicks: 105,
			cost: 3943,
			conversions: 3,
			revenue: 4489,
		},
	},
];

const GraphTable = () => {
	const [orderBy, setOrderBy] = React.useState<string>('');
	const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');
	const [tableContent, setTableContent] = React.useState<TABLE_CONTENT>(
		TABLE_CONTENT.GRAPH
	);
	const [selectGraphData, setSelectGraphData] = useState<GRAPH_DATA | string>(
		GRAPH_DATA.CLICKS
	);

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

	const totalClicks = subtotalByProperty(sortedRows, GRAPH_DATA.CLICKS);
	const totalCost = subtotalByProperty(sortedRows, GRAPH_DATA.COST);
	const totalRevenue = subtotalByProperty(sortedRows, GRAPH_DATA.REVENUE);
	const totalConversions = subtotalByProperty(
		sortedRows,
		GRAPH_DATA.CONVERSIONS
	);

	function handleSortRequest(property: string) {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	}

	function RenderTopHeader() {
		return (
			<TableRow>
				<TableCell
					align="left"
					colSpan={tableContent === TABLE_CONTENT.GRAPH ? 3 : 4}>
					Ad Insights
				</TableCell>
				{tableContent === TABLE_CONTENT.GRAPH && (
					<TableCell align="right">
						<FormControl>
							<Select
								placeholder="Select Option"
								value={selectGraphData}
								onChange={(event: SelectChangeEvent<GRAPH_DATA | string>) => {
									setSelectGraphData(event.target.value);
								}}>
								{Object.values(GRAPH_DATA).map((value) => (
									<MenuItem key={value} value={value}>
										{value}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</TableCell>
				)}
				<TableCell align="right">
					<IconButton>
						<HelpOutlineIcon />
					</IconButton>
				</TableCell>
			</TableRow>
		);
	}

	function RenderGraph() {
		return (
			<Box>
				<Table sx={{ minWidth: 700 }} aria-label="insights data table">
					<TableHead>
						<RenderTopHeader />
					</TableHead>
				</Table>
				<Box sx={{}}>
					<PieChart data={grapTableData} selectGraphData={selectGraphData} />
				</Box>
			</Box>
		);
	}

	function RenderList() {
		return (
			<Table sx={{ minWidth: 700 }} aria-label="insights data table">
				<TableHead>
					<RenderTopHeader />
					<TableRow>
						<TableCell>
							<TableSortLabel
								active={orderBy === 'group'}
								direction={orderBy === 'group' ? order : 'asc'}
								onClick={() => handleSortRequest('group')}>
								Group
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
						<TableRow key={row.group}>
							<TableCell>{row.group}</TableCell>
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
		);
	}

	function renderTableContent() {
		switch (tableContent) {
			case TABLE_CONTENT.GRAPH:
				return <RenderGraph />;
			case TABLE_CONTENT.LIST:
				return <RenderList />;
			default:
				break;
		}
	}

	return (
		<TableContainer className="insightsTableWrapper" sx={{ height: '100%' }}>
			{renderTableContent()}
			<Box className="toggleButtonWrapperBox">
				<Box className="toggleButtonWrapper">
					<IconButton
						onClick={() => setTableContent(TABLE_CONTENT.GRAPH)}
						className={
							tableContent === TABLE_CONTENT.GRAPH
								? 'activeToggleButton'
								: 'inactiveToggleButton'
						}>
						<DonutLargeIcon />
					</IconButton>
					<IconButton
						onClick={() => setTableContent(TABLE_CONTENT.LIST)}
						className={
							tableContent === TABLE_CONTENT.LIST
								? 'activeToggleButton'
								: 'inactiveToggleButton'
						}>
						<TocIcon />
					</IconButton>
				</Box>
			</Box>
		</TableContainer>
	);
};

export default GraphTable;
