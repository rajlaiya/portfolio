import React from "react";
import "./poppop.css";

const Poppop: React.FC<{ show: boolean; onClose: () => void }> = ({ show, onClose }) => {
    if (!show) return null;
    return (
        <div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 poppop-pointer-events"
        >
            <div
                className="bg-gray-900 text-white dark:bg-gray-900 dark:text-white p-6 rounded-2xl shadow-2xl min-w-[320px] max-w-[95vw] text-center border-2 border-blue-500 animate-fade-in poppop-box-shadow"
            >
                <h2 className="font-extrabold text-lg mb-2 bg-gradient-to-r from-blue-400 via-green-400 to-pink-400 bg-clip-text text-transparent">
                  🍪 Cookies & Usage Notice
                </h2>
                <p className="mb-4 text-base font-medium bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  This portfolio uses cookies to enhance your experience.<br/>
                  By continuing to browse, you agree to our use of cookies.<br/>
                  <span className="text-xs block mt-2 text-gray-300">Tested on Chrome, Firefox, Safari & all devices.</span>
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-6 py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-green-400 to-pink-400 text-white shadow hover:scale-105 transition-transform duration-200"
                >
                  Accept
                </button>
            </div>
        </div>
    );
};

export default Poppop;