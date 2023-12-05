export interface IHeading {
	heading: string;
	fontWeight: number;
	fontSize: string;
	color: string;
}
export enum ADS_TYPES {
	TEXT_ADS = 'TEXT_ADS',
	MEDIA_ADS = 'MEDIA_ADS',
}
export enum ADS_CONTENT {
	TOGGLER = 'TOGGLER',
	FORM = 'FORM',
}

export enum DIALOG_TYPE {
	SUCCESS = 'SUCCESS',
	FAILED = 'FAILED',
	WARNING = 'WARNING',
	EMPTY = 'EMPTY',
}
export enum GRAPH_DATA {
	CLICKS = 'clicks',
	COST = 'cost',
	CONVERSIONS = 'conversions',
	REVENUE = 'revenue',
}
interface Row {
	clicks: number;
	cost: number;
	conversions: number;
	revenue: number;
}
export interface CampaignsRow extends Row {
	campaigns: string;
}

export interface GroupRow extends Row {
	group: string;
}
