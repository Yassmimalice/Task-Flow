import React from 'react';
import { useState } from 'react';
import { Kanban, Users, Calendar, CheckCircle, Clock, Tag } from 'lucide-react';
import type { SearchResult } from '../types';

const mockProjects = async (): Promise<SearchResult[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: '1', title: 'Website Redesign', snippet: 'Complete overhaul of company website with new branding...', source: 'Active', date: 'Due Dec 30' },
    { id: '2', title: 'Mobile App Development', snippet: 'Native iOS and Android app development for our platform...', source: 'Planning', date: 'Due Jan 15' },
    { id: '3', title: 'Marketing Campaign', snippet: 'Q1 2024 digital marketing campaign planning and execution...', source: 'In Progress', date: 'Due Dec 20' },
    { id: '4', title: 'Customer Portal', snippet: 'New customer portal with enhanced features and analytics...', source: 'Review', date: 'Due Dec 25' },
    { id: '5', title: 'Team Training', snippet: 'Technical training program for new development team members...', source: 'Completed', date: 'Dec 10' },
  ];
};

const statusIcons: { [key: string]: React.ElementType } = {
  Active: Kanban,
  Planning: Users,
  'In Progress': Clock,
  Review: CheckCircle,
  Completed: Tag,
};

export default function DemoSection() {
  const [projects, setProjects] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadProjects = async () => {
    setIsLoading(true);
    const results = await mockProjects();
    setProjects(results);
    setIsLoading(false);
  };

  return (
    <section id="demo" className="bg-white dark:bg-gray-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">See it in action</h2>
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-8 shadow-lg">
          <div className="mb-8">
            <button
              onClick={loadProjects}
              className="w-full rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? 'Loading projects...' : 'View Sample Projects'}
            </button>
          </div>
          {projects.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Current Projects</h3>
              <ul className="space-y-4">
                {projects.map((project) => {
                  const IconComponent = statusIcons[project.source] || Kanban;
                  return (
                    <li key={project.id} className="rounded-lg bg-white dark:bg-gray-700 p-4 shadow-md transition duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-2">
                        <IconComponent className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{project.snippet}</p>
                      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>{project.source}</span>
                        <span>{project.date}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

