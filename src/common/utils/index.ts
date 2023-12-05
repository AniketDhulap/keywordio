import { CampaignsRow, GroupRow } from '../interface';

export function subtotalByProperty(
	items: readonly CampaignsRow[] | readonly GroupRow[],
	property: keyof CampaignsRow | keyof GroupRow
) {
	return items
		.map((item) => (item as any)[property])
		.reduce((sum, value) => Number(sum) + Number(value), 0);
}

export function ccyFormat(num: number) {
	return `${num.toFixed(0)}`;
}
export function formatCurrencyUSD(value: number): string {
	const formattedValue = new Intl.NumberFormat('en-US', {
		style: 'decimal',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(value);

	return `USD ${formattedValue}`;
}
