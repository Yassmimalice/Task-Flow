import React from 'react';
import { Kanban, Clock, Users, Zap, Calendar, BarChartIcon as ChartBar } from 'lucide-react';
import { useState } from 'react';

const features = [
  { icon: Kanban, title: 'Kanban Boards', description: 'Visualize your workflow with customizable boards, lists, and cards.' },
  { icon: Clock, title: 'Time Tracking', description: 'Track time spent on tasks and projects with built-in time management tools.' },
  { icon: Users, title: 'Team Collaboration', description: 'Work together seamlessly with real-time updates and team messaging.' },
  { icon: Calendar, title: 'Project Timeline', description: 'Plan and visualize project schedules with interactive Gantt charts.' },
  { icon: ChartBar, title: 'Analytics', description: 'Get insights into team performance and project progress with detailed reports.' },
  { icon: Zap, title: 'Automation', description: 'Automate repetitive tasks and workflows to save time and reduce errors.' },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">Everything you need to manage projects effectively</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-lg bg-white dark:bg-gray-700 p-6 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <feature.icon className={`mb-4 h-12 w-12 ${hoveredIndex === index ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-300'} transition-colors duration-300`} />
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

