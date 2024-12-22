import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md dark:bg-gray-900/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">TaskFlow</div>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#features" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a></li>
              <li><a href="#demo" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Demo</a></li>
              <li><a href="#pricing" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-2"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-900 dark:text-white" /> : <Menu className="h-6 w-6 text-gray-900 dark:text-white" />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="bg-white dark:bg-gray-800 px-6 py-4">
            <li><a href="#features" className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a></li>
            <li><a href="#demo" className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Demo</a></li>
            <li><a href="#pricing" className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Pricing</a></li>
            <li><a href="#faq" className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">FAQ</a></li>
            <li>
              <button className="mt-4 w-full rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 transition duration-300">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

