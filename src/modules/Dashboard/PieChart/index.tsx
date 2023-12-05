import * as echarts from 'echarts';
import React, { useEffect } from 'react';
import { GRAPH_DATA } from '../../../common/interface';

interface PieChartProps {
	data: { name: string; data: any }[];
	selectGraphData: GRAPH_DATA | string;
}

const PieChart: React.FC<PieChartProps> = ({ data, selectGraphData }) => {
	useEffect(() => {
		const chartDom = document.getElementById('main');
		if (chartDom) {
			const myChart = echarts.init(chartDom);

			const option = {
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b}: {c} ({d}%)',
				},
				legend: {
					orient: 'vertical',
					right: '25%',
					top: 'middle',
					formatter: function (name: string) {
						const dataIndex = data.findIndex((item) => item.name === name);
						const selectedProperty = data[dataIndex].data[selectGraphData];

						const percent = (
							(selectedProperty /
								data.reduce(
									(acc, item) => acc + item.data[selectGraphData],
									0
								)) *
							100
						).toFixed(2);

						return `${percent}% ${name}`;
					},
				},
				series: [
					{
						name: 'Access From',
						type: 'pie',
						center: ['40%', '50%'],
						radius: ['40%', '70%'],
						avoidLabelOverlap: false,
						itemStyle: {
							borderColor: '#fff',
							borderWidth: 5,
						},
						label: {
							show: false,
							position: 'center',
						},
						emphasis: {
							label: {
								show: true,
								fontSize: 40,
								fontWeight: 'bold',
							},
						},
						labelLine: {
							show: false,
						},
						data: data.map((item) => ({
							value: item.data[selectGraphData],
							name: item.name,
						})),
					},
				],
			};

			myChart.setOption(option);

			// Cleanup
			return () => {
				myChart.dispose();
			};
		}
	}, [data, selectGraphData]);

	return <div id="main" style={{ height: 350 }} />;
};

export default PieChart;
