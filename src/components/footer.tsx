import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 text-gray-600 dark:text-gray-400">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Features</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Security</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">About</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">API</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Terms</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Security</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-8 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SearchAI. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

