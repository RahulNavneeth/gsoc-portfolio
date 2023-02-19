export type Page = {
	year: number;
	isLocked: boolean;
	data: {
		status: 'ACCEPTED' | 'REJECTED' | 'PENDING';
		proposal: proposal;
		code: string[] | null;
		timeline: timeline[] | null;
	} | null;
};

export type proposal = {
	company_name: string;
	title: string;
	description: string;
	mentors: string[];
	drive: string[];
	objective: string[];
	technical_approch: string[];
	experience: string[];
	interaction: string[];
	conclusion: string;
};

export type timeline = {
	date: {
		start: [number, number];
		end: [number, number];
	};
	title: string;
	todo: string[];
};
