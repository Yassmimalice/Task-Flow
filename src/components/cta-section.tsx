import React from 'react';

export default function CTASection() {
  return (
    <section className="bg-purple-600 dark:bg-purple-800 py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">
          Ready to transform your project management?
        </h2>
        <p className="mb-8 text-xl text-purple-200">
          Join thousands of teams already delivering projects faster and smarter.
        </p>
        <button className="rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105">
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
}

