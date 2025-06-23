import { useEffect, useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaBookOpen, FaGamepad, FaStar, FaUniversity, FaCertificate, FaRobot, FaCamera, FaMusic, FaCodeBranch, FaGlobe } from 'react-icons/fa';
import './history-flipcard.css';

const education = [
	{
		degree: 'Diploma in Electronics & Communication',
		institution: 'GTU University',
		year: '2018-2021',
		icon: <FaUniversity className="text-blue-500 text-2xl animate-bounce" />,
		details: 'Graduated with 1st class distinction, specialized in Digital electronics, computer networks and vlsi.',
	},
	{
		degree: 'Bechlor of engineering in Electronics & Communication',
		institution: 'GTU University',
		year: '2021-2024',
		icon: <FaCertificate className="text-yellow-500 text-2xl animate-spin-slow" />,
		details: 'Graduated with 1st class distinction, specialized in Digital electronics, computer networks , AI and web development.',
	},
];

const experience = [
	{
		title: 'responsive Web Developer project Intern',
		company: 'The Developers arena',
		year: 'May 2025-Present',
		icon: <FaBriefcase className="text-purple-500 text-2xl animate-pulse" />,
		details: 'Leading a team of 8+ developers, architecting SaaS products, and mentoring juniors.',
	},
	{
		title: 'Front-end Developer project Intern',
		company: 'CodeAlpha Solutions',
		year: 'june 2024-Dec 2024',
		icon: <FaCodeBranch className="text-green-500 text-2xl animate-bounce" />,
		details: 'Completed Different task Given by Mentor. Developed and maintained client-facing web using Html, CSS, and JavaScript.',
	},
	{
		title: 'Junior Vuejs Frontend Developer Tranee',
		company: 'Kombee',
		year: 'Feb 2024-May 2024',
		icon: <FaBriefcase className="text-purple-500 text-2xl animate-pulse" />,
		details: 'Built and Maintained client-facing Web problems Using Vuejs',
	},
];

const currentLearning = [
	{ label: 'Advance web Developing', icon: <FaRobot className="text-pink-500 text-xl animate-bounce" />, img: '/images/ai.png' },
	// { label: 'Cloud DevOps (AWS, Azure)', icon: <FaCloud className="text-blue-400 text-xl animate-spin-slow" />, img: '/images/cloud.png' },
	{ label: '3D Web (tailwind css,Three.js, React Three Fiber)', icon: <FaGlobe className="text-green-500 text-xl animate-pulse" />, img: '/images/3dweb.png' },
	{ label: 'Advanced TypeScript', icon: <FaCertificate className="text-yellow-500 text-xl animate-bounce" />, img: '/images/typescript.png' },
];

const hobbies = [
	{ label: 'playing carrom', icon: <FaGamepad className="text-pink-500 text-xl animate-bounce" />, img: 'https://media.istockphoto.com/id/1316059170/photo/top-view-of-multiethnic-kids-hands-arranging-carrom-board-game-coins-for-playing-match.webp?a=1&b=1&s=612x612&w=0&k=20&c=7t7C7pEyKAT3UfWhkmIXFfdRCoc4nFU8XfZmjizOPrY=' },
	{ label: 'Travel & Photography', icon: <FaCamera className="text-blue-400 text-xl animate-spin-slow" />, img: 'https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D' },
	{ label: 'code problem solving', icon: <FaCodeBranch className="text-green-500 text-xl animate-pulse" />, img: '/images/opensource.png' },
	{ label: 'Music', icon: <FaMusic className="text-yellow-500 text-xl animate-bounce" />, img: 'https://images.unsplash.com/photo-1617300040847-369dee9d35f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGJveSUyMGxpc3NpbmclMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D' },
];

const typingTexts = [
	'My Journey',
	'Education',
	'Experience',
	'Current Learning',
	'Hobbies & Interests',
];

const TypingTitle = () => {
	const [text, setText] = useState('');
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [blink, setBlink] = useState(true);
	const [reverse, setReverse] = useState(false);

	useEffect(() => {
		if (index === typingTexts.length) return;
		if (
			subIndex === typingTexts[index].length + 1 &&
			index !== typingTexts.length - 1 &&
			!reverse
		) {
			setReverse(true);
			setTimeout(() => {}, 500);
			return;
		}
		if (subIndex === 0 && reverse) {
			setReverse(false);
			setIndex((prev) => prev + 1);
			return;
		}
		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (reverse ? -1 : 1));
			setText(typingTexts[index].substring(0, subIndex));
		}, reverse ? 40 : 120);
		return () => clearTimeout(timeout);
	}, [subIndex, index, reverse]);

	useEffect(() => {
		const blinkTimeout = setInterval(() => {
			setBlink((v) => !v);
		}, 500);
		return () => clearInterval(blinkTimeout);
	}, []);

	return (
		<h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center gap-3">
			<FaStar className="text-yellow-400 animate-bounce" />
			{text}
			<span className={blink ? '' : 'opacity-0'}>|</span>
		</h2>
	);
};

const bgAnim = (
	<div className="absolute inset-0 -z-10 overflow-hidden">
		<div className="absolute top-0 left-1/2 w-[120vw] h-[120vw] -translate-x-1/2 bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-pink-100/20 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/10 rounded-full blur-3xl animate-spin-slow" />
		<div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-green-200/30 to-blue-200/10 dark:from-green-900/20 dark:to-blue-900/10 rounded-full blur-2xl animate-pulse" />
	</div>
);

const History = () => (
	<section
		className="py-20 bg-white dark:bg-gray-900 w-full relative overflow-hidden min-h-screen animate-fade-in-up"
		id="history"
	>
		{bgAnim}
		<div className="w-full max-w-7xl mx-auto px-1 md:px-4 relative z-10 flex flex-col gap-12">
			<TypingTitle />
			{/* Education Section */}
			<div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl flex flex-col gap-4 animate-fade-in-up">
				<h3 className="text-2xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 flex items-center gap-3">
					<FaGraduationCap className="animate-bounce" /> Education
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{education.map((edu, i) => (
						<div key={i} className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-gray-800 animate-fade-in-up">
							<div className="mb-2">{edu.icon}</div>
							<div className="text-lg font-bold text-blue-700 dark:text-blue-200">{edu.degree}</div>
							<div className="text-base text-gray-600 dark:text-gray-400">{edu.institution}</div>
							<div className="text-base text-blue-600 dark:text-blue-400 font-mono">{edu.year}</div>
							<div className="text-sm text-gray-500 dark:text-gray-300 italic mt-1 animate-pulse">{edu.details}</div>
						</div>
					))}
				</div>
			</div>
			{/* Experience Section */}
			<div className="p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl flex flex-col gap-4 animate-fade-in-up">
				<h3 className="text-2xl font-extrabold text-purple-700 dark:text-purple-300 mb-4 flex items-center gap-3">
					<FaBriefcase className="animate-pulse" /> Experience
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{experience.map((exp, i) => (
						<div key={i} className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-purple-50 dark:hover:bg-gray-800 animate-fade-in-up">
							<div className="mb-2">{exp.icon}</div>
							<div className="text-lg font-bold text-purple-700 dark:text-purple-200">{exp.title}</div>
							<div className="text-base text-gray-600 dark:text-gray-400">{exp.company}</div>
							<div className="text-base text-purple-600 dark:text-purple-400 font-mono">{exp.year}</div>
							<div className="text-sm text-gray-500 dark:text-gray-300 italic mt-1 animate-pulse">{exp.details}</div>
						</div>
					))}
				</div>
			</div>
			{/* Current Learning Section */}
			<div className="p-8 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl flex flex-col gap-4 animate-fade-in-up">
				<h3 className="text-2xl font-extrabold text-green-700 dark:text-green-300 mb-4 flex items-center gap-3"><FaBookOpen className="animate-bounce" /> Current Learning</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{currentLearning.map((item, i) => (
						<div key={i} className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-50 dark:hover:bg-gray-800 animate-fade-in-up">
							<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mb-2">
								<img src={item.img} alt={item.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
							</div>
							<div className="flex items-center gap-2 text-lg font-bold text-green-700 dark:text-green-200">{item.icon} {item.label}</div>
						</div>
					))}
				</div>
			</div>
			{/* Hobbies & Interests Section */}
			<div className="p-8 rounded-2xl bg-gradient-to-r from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl flex flex-col gap-4 animate-fade-in-up">
				<h3 className="text-2xl font-extrabold text-pink-700 dark:text-pink-300 mb-4 flex items-center gap-3"><FaGamepad className="animate-bounce" /> Hobbies & Interests</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{hobbies.map((item, i) => (
						<div key={i} className="flip-card group bg-white dark:bg-gray-900 rounded-xl shadow-lg p-0 flex flex-col items-center text-center transition-all duration-500 animate-fade-in-up h-64 w-full">
							<div className="flip-card-inner w-full h-full">
								<div className="flip-card-front p-6 flex flex-col items-center justify-center h-64">
									<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mb-2">
										<img src={item.img} alt={item.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
									</div>
									<div className="flex items-center gap-2 text-lg font-bold text-pink-700 dark:text-pink-200">{item.icon} {item.label}</div>
								</div>
								<div className="flip-card-back p-6 flex flex-col items-center justify-center bg-pink-100 dark:bg-pink-900 rounded-xl h-64">
									<div className="text-base text-gray-700 dark:text-gray-200">Fun & Passion!</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default History;
