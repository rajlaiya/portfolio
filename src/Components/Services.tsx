import './services.css';
import 'animate.css';

const services = [
  {
    title: 'Web App Development',
    description: 'Custom, scalable, and high-performance web applications using modern frameworks and best practices.',
    icon: 'https://img.icons8.com/ios-filled/50/3b82f6/web.png',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, user-friendly interfaces and experiences tailored to your business needs.',
    icon: 'https://img.icons8.com/ios-filled/50/3b82f6/design.png',
  },
  {
    title: 'API Integration',
    description: 'Seamless integration of third-party APIs and services for enhanced functionality.',
    icon: 'https://img.icons8.com/ios-filled/50/3b82f6/api-settings.png',
  },
  {
    title: 'Consulting',
    description: 'Expert advice on architecture, performance, and best practices for your tech projects.',
    icon: 'https://img.icons8.com/ios-filled/50/3b82f6/consultation.png',
  },
];

const Services = () => (
  <div className="services-profile animated-bg">
    <div className="services-content max-w-5xl mx-auto px-6 animate__animated animate__fadeInDown">
      <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400">Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div key={i} className="flex flex-col items-center bg-blue-50 dark:bg-gray-800 rounded-xl shadow p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate__animated animate__zoomIn">
            <img src={service.icon} alt={service.title} className="w-14 h-14 mb-4 animate__animated animate__bounceIn" />
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{service.title}</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm text-center">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="services-bg-anim"></div>
    <footer className="services-footer">
      © 2025 Raj laiya. All rights reserved.
    </footer>
  </div>
);

export default Services;
