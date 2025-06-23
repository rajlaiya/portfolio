import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_USER_ID, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../emailjs.config';
import '../contact-animations.css';
import '../coding-form.css';

const icons = {
  name: 'https://img.icons8.com/ios-filled/50/3b82f6/user.png',
  email: 'https://img.icons8.com/ios-filled/50/3b82f6/new-post.png',
  message: 'https://img.icons8.com/ios-filled/50/3b82f6/speech-bubble.png',
  phone: 'https://img.icons8.com/ios-filled/50/3b82f6/phone.png',
  linkedin: 'https://img.icons8.com/ios-filled/50/3b82f6/linkedin.png',
  github: 'https://img.icons8.com/ios-filled/50/3b82f6/github.png',
  linktree: 'https://img.icons8.com/ios-filled/50/3b82f6/linktree.png',
};

const contactLinks = [
  {
    label: 'Email',
    icon: icons.email,
    value: 'rajlaiya2017@gmail.com',
    href: 'https://mail.google.com/mail/u/0/#inbox?compose=VpCqJTCpnzrCCbMzbXlXhkqlqDltJXDBVKZcmsXDMFTtCjnFzLKqRKPcsRtxsFNtscqXlPQ',
    color: 'hover:bg-blue-100 dark:hover:bg-blue-900',
  },
  {
    label: 'Phone',
    icon: icons.phone,
    value: '+91 6355705208',
    href: 'tel:+916355705208',
    color: 'hover:bg-green-100 dark:hover:bg-green-900',
  },
  {
    label: 'LinkedIn',
    icon: icons.linkedin,
    value: 'linkedin.com/in/rajlaiya',
    href: 'https://www.linkedin.com/in/laiya-raj-y21e502d01',
    color: 'hover:bg-blue-200 dark:hover:bg-blue-800',
  },
  {
    label: 'GitHub',
    icon: icons.github,
    value: 'github.com/rajlaiya',
    href: 'https://github.com/rajlaiya',
    color: 'hover:bg-gray-200 dark:hover:bg-gray-800',
  },
  {
    label: 'Linktree',
    icon: icons.linktree,
    value: 'linktr.ee/rajlaiya',
    href: 'https://linktr.ee/raj_laiya?utm_source=linktree_admin_share',
    color: 'hover:bg-purple-100 dark:hover:bg-purple-900',
  },
];

const initialState = { name: '', email: '', message: '' };

const validate = (values: typeof initialState) => {
  const errors: Partial<typeof initialState> = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errors.email = 'Valid email is required';
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
};

const Contact = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<typeof initialState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setSendError(null);
    if (Object.keys(errs).length === 0) {
      setSending(true);
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          EMAILJS_USER_ID
        );
        setSubmitted(true);
        setValues(initialState);
        setTimeout(() => setSubmitted(false), 3000);
      } catch (err) {
        setSendError('Failed to send. Please try again later.');
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <section className="py-20 contact-animated-bg font-['Fira_Code','JetBrains_Mono','monospace']" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg contact-fade-in">Contact</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="coding-form p-8 flex flex-col gap-6 contact-fade-in animate__animated animate__fadeInLeft">
            <label htmlFor="name">Name</label>
            <div className="relative flex items-center">
              <img src={icons.name} alt="Name" className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 opacity-80" />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={values.name}
                onChange={handleChange}
                className={`pl-12 border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition ${errors.name ? 'input-error' : 'border-gray-300'}`}
                autoComplete="off"
              />
            </div>
            {errors.name && <span className="text-red-500 text-xs ml-2">{errors.name}</span>}
            <label htmlFor="email">Email</label>
            <div className="relative flex items-center">
              <img src={icons.email} alt="Email" className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 opacity-80" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={values.email}
                onChange={handleChange}
                className={`pl-12 border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition ${errors.email ? 'input-error' : 'border-gray-300'}`}
                autoComplete="off"
              />
            </div>
            {errors.email && <span className="text-red-500 text-xs ml-2">{errors.email}</span>}
            <label htmlFor="message">Message</label>
            <div className="relative flex items-center">
              <img src={icons.message} alt="Message" className="w-6 h-6 absolute left-3 top-4 opacity-80" />
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                className={`pl-12 border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition ${errors.message ? 'input-error' : 'border-gray-300'}`}
              />
            </div>
            {errors.message && <span className="text-red-500 text-xs ml-2">{errors.message}</span>}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition contact-fade-in shadow-lg hover:scale-105 active:scale-95"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            {sendError && (
              <div className="text-red-400 text-center font-semibold mt-2 animate-bounce">{sendError}</div>
            )}
            {submitted && (
              <div className="text-green-400 text-center font-semibold mt-2 animate-bounce">Thank you! Your message has been sent.</div>
            )}
          </form>
          <div className="flex flex-col gap-6 contact-fade-in animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2 animate__animated animate__pulse animate__infinite">
              <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5" /></svg>
              Reach Me Directly
            </h3>
            <ul className="space-y-4">
              {contactLinks.map((link, i) => (
                <li key={i} className={`flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 rounded-lg px-5 py-3 shadow hover:scale-105 transition-transform duration-300 ${link.color} animate__animated animate__pulse animate__infinite`}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
                    <img src={link.icon} alt={link.label} className="w-7 h-7" />
                    <span className="font-semibold text-blue-700 dark:text-blue-200 text-base">{link.label}:</span>
                    <span className="text-gray-700 dark:text-gray-200 text-sm font-mono">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
