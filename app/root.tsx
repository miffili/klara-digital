import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { clsx } from 'clsx';

import stylesheet from './tailwind.css?url';
import {
	NonFlashOfWrongThemeEls,
	ThemeProvider,
	useTheme,
} from 'utils/theme-provider';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
];

export const meta: MetaFunction = () => {
	return [
		{ charset: 'utf-8' },
		{ title: "🌱 Klara's Digital Garden" },
		{ viewport: 'width=device-width, initial-scale=1' },
	];
};

function App() {
	const [theme] = useTheme();

	return (
		<html lang='en' className={clsx(theme)}>
			<head>
				<Meta />
				<Links />
				<NonFlashOfWrongThemeEls />
			</head>
			<body className='bg-white dark:bg-slate-800 text-slate-800 dark:text-white'>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function AppWithProviders() {
	return (
		<ThemeProvider>
			<App />
		</ThemeProvider>
	);
}
