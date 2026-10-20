export interface Model {
	id: 'dum-e' | 'edith' | 'jarvis' | 'aida' | 'vision' | 'ultron';
	name: string;
	tag: string;
	/** Resting tilt of the showcase card, in degrees. */
	rotation: number;
	/** Vertical drop of the showcase card so the row reads as a staggered cascade. */
	offset: string;
	/** Full-card artwork (WebP, 1024x1536). */
	image: string;
	/** CSS object-position for the artwork crop inside the showcase card. */
	artPosition: string;
	caption: string[];
	showcaseDescription: string;
	catalogDescription: string;
	status: string;
	tags: string[];
}

export const models: Model[] = [
	{
		id: 'dum-e',
		name: 'DUM-E',
		tag: 'Tool calling',
		rotation: -2.5,
		offset: '0rem',
		image: '/images/models/dum-e.webp',
		artPosition: '50% 80%',
		caption: ['small robots,', 'big potential.'],
		showcaseDescription: 'A small, nimble delegate for real work.',
		catalogDescription:
			'The smallest model in the lineup: a fast, lightweight delegate for basic tool calling and task execution.',
		status: 'Beta',
		tags: ['Agents', 'Tool use', 'Automation'],
	},
	{
		id: 'edith',
		name: 'E.D.I.T.H.',
		tag: 'Summarization',
		rotation: 1.5,
		offset: '0.4rem',
		image: '/images/models/edith.webp',
		artPosition: '50% 40%',
		caption: ['see', 'understand', 'remember', 'what matters.'],
		showcaseDescription: 'Context compaction and summarization.',
		catalogDescription:
			'A summarization model focused on scope management and context compaction without losing emphasis.',
		status: 'Beta',
		tags: ['Summarization', 'RAG', 'Context'],
	},
	{
		id: 'jarvis',
		name: 'J.A.R.V.I.S.',
		tag: 'Orchestration',
		rotation: 0,
		offset: '0.8rem',
		image: '/images/models/jarvis.webp',
		artPosition: '50% 45%',
		caption: ['coordinate', 'execute', 'verify'],
		showcaseDescription: 'Delegation, orchestration and output verification.',
		catalogDescription:
			'An orchestration model for delegation, coordinating work, and checking outputs for correctness more often.',
		status: 'Beta',
		tags: ['Orchestration', 'Planning', 'Tools'],
	},
	{
		id: 'aida',
		name: 'A.I.D.A.',
		tag: 'Defense',
		rotation: 1,
		offset: '1.1rem',
		image: '/images/models/aida.webp',
		artPosition: '50% 50%',
		caption: ['small,', 'capable,', 'uncensored.'],
		showcaseDescription: 'Small, capable uncensored defense model.',
		catalogDescription:
			'Small, capable uncensored defense model (~7B parameters) designed to work with REA and browser-search tools.',
		status: 'Planned',
		tags: ['Defense', 'Tool use', 'Browser search'],
	},

	{
		id: 'vision',
		name: 'VISION',
		tag: 'Reasoning',
		rotation: 2,
		offset: '1.4rem',
		image: '/images/models/vision.webp',
		artPosition: '50% 40%',
		caption: ['analyze', 'reason', 'plan', 'solve'],
		showcaseDescription: 'A reasoning model targeting 7B parameters for deeper thinking.',
		catalogDescription:
			'A general-purpose smart reasoning model, targeting a comfortable 7B parameters.',
		status: 'Beta',
		tags: ['Reasoning', 'Planning', 'Multimodal'],
	},
	{
		id: 'ultron',
		name: 'ULTRON',
		tag: 'Defense',
		rotation: -1.5,
		offset: '2rem',
		image: '/images/models/ultron.webp',
		artPosition: '50% 30%',
		caption: ['local', 'private', 'uncensored', 'yours'],
		showcaseDescription: 'Uncensored local defense model.',
		catalogDescription:
			'A planned uncensored defense model, estimated at around 24B parameters, with Q2, Q3, and Q4 quantized variants intended to fit 16GB MacBooks.',
		status: 'Planned',
		tags: ['Safety', 'Local', 'Defense'],
	},
];

export const roadmapItem = {
	name: 'More to come',
	status: 'Roadmap',
	catalogDescription: 'Additional models and tools in development.',
	tags: ['Multimodal', 'Speech', 'Robotics'],
};
