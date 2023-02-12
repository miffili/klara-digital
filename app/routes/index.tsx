import { Theme, useTheme } from 'utils/theme-provider';

export default function Index() {
	const [theme, setTheme] = useTheme();

	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		);
	};

	return (
		<div className='m-4'>
			<h1 className='mb-4 text-xl font-semibold'>Welcome to Remix</h1>
			<p className='mb-2'>Current theme: {theme}</p>
			<button
				onClick={toggleTheme}
				className='py-2 px-4 bg-slate-800 dark:bg-white text-white dark:text-slate-800 rounded-md'
			>
				Toggle theme
			</button>
		</div>
	);
}
