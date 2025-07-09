// import './Hero3D.css'; // Assuming you have a separate CSS file for styles

const Hero3D = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black py-20 px-8 min-h-screen flex items-center justify-center transition-colors duration-500 font-mono overflow-hidden" id="hero">
    {/* Animated background blobs for dark mode */}
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-900 dark:bg-blue-900 rounded-full blur-3xl opacity-40 animate-blob1 z-0" />
    <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-900 dark:bg-purple-900 rounded-full blur-2xl opacity-30 animate-blob2 z-0" />
    <div className="absolute bottom-0 left-1/2 w-[350px] h-[350px] bg-pink-900 dark:bg-pink-900 rounded-full blur-2xl opacity-20 animate-blob3 z-0" />
    <style>{`
      @keyframes blob1 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(40px) scale(1.1);} }
      @keyframes blob2 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-30px) scale(1.05);} }
      @keyframes blob3 { 0%,100%{transform:translateX(0) scale(1);} 50%{transform:translateX(-40px) scale(1.08);} }
      .animate-blob1{animation:blob1 8s ease-in-out infinite;}
      .animate-blob2{animation:blob2 10s ease-in-out infinite;}
      .animate-blob3{animation:blob3 12s ease-in-out infinite;}
      .hero-img-effect {
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        border-radius: 2rem;
        filter: saturate(1.2) brightness(1.08) drop-shadow(0 0 32px #38bdf8cc);
        transition: transform 0.5s cubic-bezier(.4,2,.3,1), box-shadow 0.5s;
      }
      .hero-img-effect:hover {
        transform: scale(1.04) rotate(-2deg);
        box-shadow: 0 16px 48px 0 #6366f1cc;
        filter: saturate(1.4) brightness(1.13) drop-shadow(0 0 48px #6366f1cc);
      }
    `}</style>
    <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center gap-10 z-10 relative max-w-4xl">
      <div className="w-full text-center px-4 py-8">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white drop-shadow-lg font-['Fira_Code','JetBrains_Mono','monospace']">Hi, I'm <span className="text-blue-600 dark:text-blue-400">Raj Laiya</span></h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-600 dark:text-blue-400 font-['Fira_Code','JetBrains_Mono','monospace']">Fullstack Developer</h3>
        <p className="mb-8 text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-['Fira_Code','JetBrains_Mono','monospace'] text-lg">I build scalable web applications with modern technologies. Passionate about clean code, and solving real-world problems.</p>
        <div className="flex flex-wrap gap-10 mb-8 justify-center">
          <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition font-['Fira_Code','JetBrains_Mono','monospace']">Contact Me</a>
          <a href="#projects" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition font-['Fira_Code','JetBrains_Mono','monospace']">Projects</a>
          <a href="https://drive.google.com/file/d/1Tk2ITdVlSTwmhp31JnFpD0QPSIanIB7B/view?usp=sharing" download className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-900 transition font-['Fira_Code','JetBrains_Mono','monospace']">Resume</a>
        </div>
      </div>
      {/* Optional image section - currently commented out */}
      {/* <div className="w-full flex justify-center px-4 py-8">
        <img
          src="https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzcG9uc2l2ZSUyMHdlYiUyMGRlc2lnbiUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Responsive web design"
          className="hero-img-effect max-w-[400px] w-full h-auto shadow-2xl"
        />
      </div> */}
    </div>
    <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block">
      {/* Random code effect background */}
      <svg width="100%" height="100%" className="opacity-10">
        <text x="10%" y="30%" fontSize="32" fill="#3b82f6" fontFamily="Fira Code, JetBrains Mono, monospace">{`const x = 42; // Developer`}</text>
        <text x="20%" y="35%" fontSize="28" fill="#6366f1" fontFamily="Fira Code, JetBrains Mono, monospace">{`<div>lets code with raj<div>`}</text>
        <text x="30%" y="80%" fontSize="24" fill="#0ea5e9" fontFamily="Fira Code, JetBrains Mono, monospace">{`<div>React 3D!</div>`}</text>
      </svg>
    </div>
  </section>
);

export default Hero3D;
