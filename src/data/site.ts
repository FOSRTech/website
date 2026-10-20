import { models } from './models';

export const site = {
	name: 'FOSR Tech',
	title: 'FOSR Tech | Small models. Serious work.',
	description:
		'FOSR Tech is an independent engineering lab exploring useful AI, open-source software, and security research.',
	url: 'https://fosr.tech',
	githubUrl: 'https://github.com/FOSRTech',
	themeColor: '#F7F5EF',
};

export interface SiteLink {
	label: string;
	href?: string;
}

export const navLinks: SiteLink[] = [
	{ label: 'Models', href: '#models' },
	{ label: 'Research', href: '#research' },
	{ label: 'Journal', href: '#journal' },
	{ label: 'About', href: '#about' },
	{ label: 'GitHub', href: site.githubUrl },
];

export const workCategories = [
	{
		id: 'ai-models',
		title: 'AI & Models',
		description:
			'Small, capable models for real-world tasks, optimized for local and edge devices.',
		icon: 'cube',
	},
	{
		id: 'security-research',
		title: 'Security Research',
		description:
			'iOS and platform security research, reverse engineering, and technical write-ups.',
		icon: 'lock',
	},
	{
		id: 'open-source',
		title: 'Open Source',
		description: 'Developer tools, libraries, and experimental projects for the community.',
		icon: 'code',
	},
] as const;

export const footerGroups: { title: string; links: SiteLink[] }[] = [
	{
		title: 'Company',
		links: [
			{ label: 'About', href: '#about' },
			{ label: 'Research', href: '#research' },
			{ label: 'Journal', href: '#journal' },
			{ label: 'GitHub', href: site.githubUrl },
			{ label: 'Contact' },
		],
	},
	{
		title: 'Research',
		links: [
			{ label: 'AI & Models', href: '#ai-models' },
			{ label: 'Security Research', href: '#security-research' },
			{ label: 'Experiments', href: '#open-source' },
			{ label: 'Technical Notes', href: '#journal' },
			{ label: 'Publications', href: '#journal' },
		],
	},
	{
		title: 'Models',
		links: models.map((model) => ({ label: model.name, href: `#model-${model.id}` })),
	},
	{
		title: 'Follow',
		links: [{ label: 'GitHub', href: site.githubUrl }],
	},
];
