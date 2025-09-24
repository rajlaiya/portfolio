import { useEffect, useState } from 'react';
// import { FaL } from 'react-icons/fa6';

type StackType = 'frontend' | 'backend' | 'both';

const projects = [
	{
		title: 'Intern Management Portal',
		description:
			'A web application for managing intern applications, including form submission, validation, and data storage.',
		tech: ['Html', 'typescript', 'CSS'],
		github: 'https://github.com/rajlaiya/INTERN_FORM_USING-JS-TS',
		image:
			'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D',
		live: 'https://rajlaiya.github.io/INTERN_FORM_USING-JS-TS/',
		status: 'done',
		stack: 'frontend' as StackType,
		mini: false,
	},
	{
		title: 'Shopwow E-commerce',
		description:
			'A scalable e-commerce platform with secure payments, admin dashboard, and product recommendations.',
		tech: ['Vuejs', 'Vite', 'Vuetify', 'typescript', 'EmailJS'],
		github: 'https://github.com/rajlaiya/Shopwow',
		image:
			'https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww',
		live: 'https://rajlaiya.github.io/Shopwow/',
		status: 'progress',
		stack: 'both' as StackType,
		mini: false,
	},
	{
		title: 'DevPortfolio',
		description:
			'A modern portfolio website template for developers, with dark mode, animations, and easy customization.',
		tech: [
			'React',
			'vite',
			'Tailwind CSS',
			'Framer Motion',
			'JavaScript',
			'EmailJS',
			'three.js',
		],
		image:
			'https://miro.medium.com/v2/resize:fit:1123/1*6C702o6cpNyLm27WLdZyjg.png',
		live: 'https://rajlaiya-portfolio.netlify.app/',
		status: 'progress',
		stack: 'frontend' as StackType,
		mini: false,
	},
	{
		title: 'Music',
		description:
			'Created music website that allows users to search and play music tracks, create playlists, and discover new music.',
		tech: [
			'React',
			'Tailwind CSS',
			'Framer Motion',
			'JavaScript',
			'EmailJS',
			'unsplash',
		],
		github: '#',
		image:
			'https://media.istockphoto.com/id/1491223480/photo/3d-illustration-of-happy-man-with-phone-and-headphones-listening-to-music-on-color-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=CC_GZ5yoSp0Iu8o9y46QhXzMcONCNr5U9lmlFtmpWkI=',
		live: '#',
		status: 'progress',
		stack: 'frontend' as StackType,
		mini: false,
	},
	{
		title: 'Astha school Website',
		description:
			'A responsive website for Astha school, showcasing courses, faculty, and admission details with a modern design.',
		tech: [
			'Html',
			'Tailwind CSS',
			'Framer Motion',
			'JavaScript',
			'locomotive scroll',
			'unsplash',
		],
		github: '#',
		image:
			'https://media.istockphoto.com/id/1491223480/photo/3d-illustration-of-happy-man-with-phone-and-headphones-listening-to-music-on-color-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=CC_GZ5yoSp0Iu8o9y46QhXzMcONCNr5U9lmlFtmpWkI=',
		live: '#',
		status: 'done',
		stack: 'frontend' as StackType,
		mini: false,
	},
	{
		title: 'Foodies web',
		description:
			'A food discovery website that helps users find and share recipes, with features like meal planning, grocery lists, and user reviews.',
		tech: ['Vue3', 'Typescript', 'AI', 'Vite', 'Tailwind CSS', 'Unsplash'],
		image:
			'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
		live: 'https://foodieshome.netlify.app/about',
		status: 'done',
		stack: 'frontend' as StackType,
		mini: false,
	},
	{
		title: 'Food Point web Design',
		description:
			'A modern food delivery website design created using Canva, featuring a clean layout, vibrant images, and user-friendly navigation.',
		tech: ['Canva', 'AI'],
		image:
			'https://drive.google.com/file/d/1gcsiR7nWqMx9J0OBnUjefa6jgxuNUAOy/view?usp=sharing',
		live: 'https://food-point.my.canva.site/food-point-rl',
		status: 'done',
		stack: 'frontend' as StackType,
		mini: true,
	},
	{
		title: 'Age calculator',
		description:
			'A simple age calculator that determines your age based on the date of birth you provide.',
		tech: ['Html', 'CSS', 'JavaScript'],
		github: 'https://github.com/rajlaiya/Age_calculator_pro',
		image:
			'https://images.unsplash.com/photo-1534768654272-e97681c3a2c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdlfGVufDB8fDB8fHww',
		live: 'https://funwithage.netlify.app/',
		status: 'done',
		stack: 'frontend' as StackType,
		mini: true,
	},
	{
		title: 'Basic calculator with notepad',
		description:
			'A simple calculator built using HTML, CSS, and JavaScript that performs basic arithmetic operations like addition, subtraction, multiplication, and division.',
		tech: ['Html', 'Css', 'Javascript'],
		github: 'https://github.com/rajlaiya/SIMPLE-CALCULATOR-WITH-NOTEPAD',
		image:
			'https://plus.unsplash.com/premium_photo-1684330690142-2fbfce401fe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsY3VsYXRvciUyMHdpdGglMjBub3RlcGFkfGVufDB8fDB8fHww',
		live: 'https://rajlaiya.github.io/SIMPLE-CALCULATOR-WITH-NOTEPAD/',
		status: 'done',
		stack: 'frontend' as StackType,
		mini: true,
	},
	{
		title: 'Temperature Converter',
		description:
			'A simple temperature converter that allows you to convert temperatures between Celsius, Fahrenheit, and Kelvin.',
		tech: ['Html', 'CSS', 'JavaScript'],
		github: '#',
		image:
			'https://media.istockphoto.com/id/1393245512/photo/temperature-contrast-minimal-thermometer-3d-render-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=6vlMW5YaIgtQ6RIrIo-9wRRv4A2fHX55IABfEyt4U9M=',
		live: 'https://temperatureswitch.netlify.app/',
		status: 'done',
		stack: 'frontend' as StackType,
		mini: true,
	},
];

const Counter = () => {
	const [count, setCount] = useState({
		done: 0,
		progress: 0,
		mini: 0,
		total: 0,
	});
	useEffect(() => {
		const done = projects.filter((p) => p.status === 'done' && !p.mini).length;
		const progress = projects.filter((p) => p.status === 'progress').length;
		const mini = projects.filter((p) => p.mini).length;
		const total = projects.length;
		setCount({ done, progress, mini, total });
	}, []);
	return (
		<div className="flex flex-wrap gap-6 justify-center mb-10">
			<div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-xl px-8 py-6 shadow text-center">
				<div className="text-3xl font-bold">{count.done}</div>
				<div className="font-semibold mt-1">Projects Done</div>
			</div>
			<div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 rounded-xl px-8 py-6 shadow text-center">
				<div className="text-3xl font-bold">{count.progress}</div>
				<div className="font-semibold mt-1">In Progress</div>
			</div>
			<div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-xl px-8 py-6 shadow text-center">
				<div className="text-3xl font-bold">{count.mini}</div>
				<div className="font-semibold mt-1">Mini Projects</div>
			</div>
			<div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl px-8 py-6 shadow text-center">
				<div className="text-3xl font-bold">{count.total}</div>
				<div className="font-semibold mt-1">Total Projects</div>
			</div>
		</div>
	);
};

const stackLabel = (v: 'frontend' | 'backend' | 'both') => {
	if (v === 'frontend') return 'Frontend';
	if (v === 'backend') return 'Backend';
	return 'Frontend & Backend';
};

const stackBadgeClass = (v: 'frontend' | 'backend' | 'both') => {
	switch (v) {
		case 'frontend':
			return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300';
		case 'backend':
			return 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300';
		case 'both':
		default:
			return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300';
	}
};

const MiniProjects = () => (
	<div className="mt-16">
		<h3 className="text-5xl font-bold mb-6 text-green-600 dark:text-green-400">
			Mini Projects
		</h3>
		<div className="grid md:grid-cols-3 gap-9">
			{projects
				.filter((p) => p.mini)
				.map((project, idx) => (
					<div
						key={idx}
						className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
					>
						<img
							src={project.image}
							alt={project.title}
							className="h-40 w-full object-cover"
						/>
												<div className="p-6 flex-1 flex flex-col">
														{project.stack && (
															<span className={`inline-block mb-3 px-2 py-1 rounded text-[11px] font-semibold ${stackBadgeClass(project.stack)}`}>
																{stackLabel(project.stack)}
															</span>
														)}
							<h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
								{project.title}
							</h4>
							<p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-1 rounded text-xs font-mono"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-4 mt-auto">
								<a
									href={project.github}
									className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
								<a
									href={project.live}
									className="text-green-600 dark:text-green-400 hover:underline font-semibold"
									target="_blank"
									rel="noopener noreferrer"
								>
									Live Demo
								</a>
							</div>
						</div>
					</div>
				))}
		</div>
	</div>
);

const Projects = () => (
	<section
		className="py-20 bg-white dark:bg-gray-900 w-full relative overflow-hidden min-h-screen animate-fade-in-up"
		id="projects"
	>
		{/* Background Animation */}
		<div className="absolute inset-0 -z-10 overflow-hidden">
			<div className="absolute top-0 left-1/2 w-[120vw] h-[120vw] -translate-x-1/2 bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-pink-100/20 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/10 rounded-full blur-3xl animate-spin-slow" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-green-200/30 to-blue-200/10 dark:from-green-900/20 dark:to-blue-900/10 rounded-full blur-2xl animate-pulse" />
		</div>
		<div className="container mx-auto px-3 sm:px-4 max-w-9xl">
			<h2 className="text-5xl font-bold mb-8 text-blue-600 dark:text-blue-400">
				Projects
			</h2>
			<Counter />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
				{projects
					.filter((p) => !p.mini)
					.map((project, idx) => (
						<div
							key={idx}
							className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col w-full max-w-md min-h-[380px] mx-auto"
						>
							<img
								src={project.image}
								alt={project.title}
								className="h-40 w-full object-cover"
							/>
														<div className="p-4 flex-1 flex flex-col">
																{project.stack && (
																	<span className={`inline-block mb-2 px-2 py-1 rounded text-[11px] font-semibold ${stackBadgeClass(project.stack)}`}>
																		{stackLabel(project.stack)}
																	</span>
																)}
								<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
									{project.title}
								</h3>
								<p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded text-xs font-mono"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex gap-4 mt-auto">
									<a
										href={project.github}
										className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
									<a
										href={project.live}
										className="text-green-600 dark:text-green-400 hover:underline font-semibold"
										target="_blank"
										rel="noopener noreferrer"
									>
										Live Demo
									</a>
								</div>
							</div>
						</div>
					))}
			</div>
			<MiniProjects />
		</div>
	</section>
);

export default Projects;
