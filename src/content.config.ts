import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const article = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/content/article' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		image: z.string().optional(),
		tags: z.array(z.string()).default([]),
		author: z.string().default('Pulse'),
		slug: z.string().optional(),
	}),
});

const pages = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/content/pages' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
	}),
});

export const collections = { article, pages };
