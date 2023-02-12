import type { MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import { clsx } from 'clsx';
import {
	NonFlashOfWrongThemeEls,
	ThemeProvider,
	useTheme,
} from 'utils/theme-provider';
import styles from './styles/app.css';

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: "🌱 Klara's Digital Garden",
	viewport: 'width=device-width,initial-scale=1',
});

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
				<LiveReload />
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
