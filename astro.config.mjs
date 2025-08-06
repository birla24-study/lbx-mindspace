// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';

// https://astro.build/config
export default defineConfig({
	site: 'https://birla24-study.github.io',
	base: '/lbx-mindspace',
	integrations: [
		starlight({
			plugins: [starlightThemeObsidian()],
			title: 'LBX\'s Mindspace',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/birla24-study/lbx-mindspace' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Getting Started', slug: 'index' },
						{ label: 'Random Note 1', slug: 'random-note-1' },
						{ label: 'Random Note 2', slug: 'random-note-2' },
						{ label: 'Fun Facts', slug: 'fun-facts' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
