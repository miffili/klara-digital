import { netlifyPlugin } from '@netlify/remix-adapter/plugin';
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig({
	plugins: [!isStorybook && remix(), netlifyPlugin(), tsconfigPaths()],
});
