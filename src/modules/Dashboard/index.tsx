import { Grid } from '@mui/material';
import GraphTable from './Chart';
import DataTable from './DataTable';
import './dashboard.scss';

const Dashboard = () => {
	return (
		<Grid container rowGap={2} className="gridWrapper">
			<Grid item xs={12} lg={5.9} className="tableWrapper">
				<DataTable />
			</Grid>
			<Grid item xs={12} lg={5.9} className="tableChartWrapper">
				<GraphTable />
			</Grid>
		</Grid>
	);
};

export default Dashboard;
