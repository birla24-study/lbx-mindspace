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
					label: 'BIO201X',
					autogenerate: { directory: 'BIO201X' },
				},
				{
					label: 'BIO203X',
					autogenerate: { directory: 'BIO203X' },
				},
				{
					label: 'BIO205Y',
					autogenerate: { directory: 'BIO205Y' },
				},
				{
					label: 'CHM221X',
					autogenerate: { directory: 'CHM221X' },
				},
				{
					label: 'CHM211X',
					autogenerate: { directory: 'CHM211X' },
				},
				{
					label: 'CHM223X',
					autogenerate: { directory: 'CHM223X' },
				},
				{
					label: 'EES201X',
					autogenerate: { directory: 'EES201X' },
				},
				{
					label: 'EES205',
					autogenerate: { directory: 'EES205' },
				},
				{
					label: 'EES207',
					autogenerate: { directory: 'EES207' },
				},
			],
		}),
	],
});
