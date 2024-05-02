import type { MetaFunction } from '@remix-run/node';
import { useTheme, Theme } from 'utils/theme-provider';

export const meta: MetaFunction = () => {
	return [
		{ title: "Klara's Digital Garden" },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export default function Index() {
	const [, setTheme] = useTheme();

	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		);
	};

	return (
		<div className='m-4'>
			<h1 className='mb-4 text-xl font-semibold'>
				Welcome to Klara&apos;s Digital Garden
			</h1>
			<button
				onClick={toggleTheme}
				className='py-2 px-4 bg-slate-800 dark:bg-white text-white dark:text-slate-800 rounded-md'
			>
				Toggle theme
			</button>
		</div>
	);
}
