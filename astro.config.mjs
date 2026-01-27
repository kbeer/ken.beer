// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ken.beer',
	integrations: [
		starlight({
			title: 'Ken Beer',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/kbeer' },
				{ icon: 'email', label: 'Email', href: 'mailto:ken.beer@ken.beer' },
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Welcome', slug: 'index' },
					],
				},
				{
					label: 'Docs',
					autogenerate: { directory: 'docs' },
				},
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
			},
		}),
	],
});
