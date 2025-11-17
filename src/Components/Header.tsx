import { useState, useRef, useEffect } from 'react';
import React from 'react';

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    }
    if (dropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdown]);

  // Hide mobile menu on navigation
  useEffect(() => {
    if (!mobileMenu) return;
    const close = () => setMobileMenu(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, [mobileMenu]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const headerRef = useRef<HTMLElement | null>(null);

  // Expose header height as CSS variable so sections can size to viewport minus header
  useEffect(() => {
    const setNavHeight = () => {
      const h = headerRef.current?.offsetHeight || 64;
      document.documentElement.style.setProperty('--nav-h', `${h}px`);
    };
    setNavHeight();
    const onResize = () => setNavHeight();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 backdrop-blur-md bg-white/55 dark:bg-gray-900/45 border-b border-black/5 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="w-full flex justify-between items-center py-4 px-6">
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Raj laiya</span>
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden ml-auto">
          <button
            className="p-2 rounded-full bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-gray-700 transition shadow-md w-12 h-12 flex items-center justify-center"
            aria-label="Open menu"
            onClick={() => setMobileMenu((m) => !m)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {/* Desktop Nav */}
        <nav className="space-x-6 items-center hidden md:flex">
          <a href="#hero" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Home</a>
          <a href="#about" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">About</a>
          <a href="#skills" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Skills</a>
          <a href="#projects" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Projects</a>
          <a href="#contact" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Contact</a>
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setDropdown((d) => !d)}
              className="ml-2 px-4 py-2 bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-lg font-medium hover:bg-blue-200 dark:hover:bg-gray-700 transition flex items-center gap-2"
            >
              Other <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg z-50 border border-blue-100 dark:border-gray-800 animate-fade-in">
                <a href="#services" className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-800 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setDropdown(false)}>Services</a>
                <a href="#socialmedia" className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-800 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setDropdown(false)}>Socialmedia</a>
              </div>
            )}
          </div>
          {/* Theme Toggle Button for Desktop */}
          <button
            aria-label="Toggle Theme"
            className="ml-4 p-2 rounded-full bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-gray-700 transition shadow-md w-12 h-12 flex items-center justify-center"
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            )}
          </button>
        </nav>
        {/* End Desktop Nav */}
      </div>
      {/* Mobile menu overlay */}
      {mobileMenu && (
        <>
          <div className="mobile-sidebar-backdrop" onClick={() => setMobileMenu(false)} />
          <nav className="mobile-sidebar-menu animate-slide-in-right" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setMobileMenu(false)}>×</button>
            <a href="#hero" onClick={() => setMobileMenu(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
            <a href="#skills" onClick={() => setMobileMenu(false)}>Skills</a>
            <a href="#projects" onClick={() => setMobileMenu(false)}>Projects</a>
            <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
            <a href="#services" onClick={() => setMobileMenu(false)}>Services</a>
            <a href="#socialmedia" onClick={() => setMobileMenu(false)}>Socialmedia</a>
          </nav>
        </>
      )}
      
      {/* Floating Theme Button - Mobile Only */}
      <button
        aria-label="Toggle Theme"
        className="mobile-floating-theme-btn md:hidden"
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
        )}
      </button>
    </header>
  );
};

export default Header;
