import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState('');
  const words = ['projects', 'tasks', 'deadlines', 'teams', 'goals'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord('');
    const word = words[wordIndex];
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < word.length) {
        setCurrentWord((prev) => prev + word[i]);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [wordIndex]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-purple-100 dark:from-gray-900 dark:to-purple-900 px-4 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:mix-blend-overlay"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-yellow-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-overlay"></div>
        <div className="absolute left-1/3 bottom-1/3 h-64 w-64 rounded-full bg-pink-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-overlay"></div>
      </div>
      
      <div className="relative mx-auto max-w-6xl text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Manage your
          <span className="block text-purple-600 dark:text-purple-400">
            <span className="inline-block min-w-[280px]">{currentWord}</span>
          </span>
          Effortlessly.
        </h1>
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
          One platform for all your project management needs.
          <br />
          Streamline workflows and boost team productivity.
        </p>
        
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your work email to get started"
              className="w-full rounded-lg bg-white/80 dark:bg-gray-800/80 px-4 py-3 pl-12 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <ArrowRight className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
          
          <button className="mt-4 rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105">
            Start Free Trial
          </button>
        </div>

        <div className="mt-16">
          <p className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-300">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Adobe', 'Spotify', 'Slack', 'Netflix', 'Uber'].map((company) => (
              <div key={company} className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg transition duration-300 transform hover:scale-110">
                <span className="text-xl font-medium text-gray-900 dark:text-white">{company[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

