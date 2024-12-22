import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FAQ } from '../types';

const faqs: FAQ[] = [
  {
    question: "How does the project tracking work?",
    answer: "Our project tracking system uses intuitive Kanban boards and Gantt charts to help you visualize project progress. You can easily move tasks between different stages, set deadlines, and track time spent on each task."
  },
  {
    question: "Can I integrate with other tools?",
    answer: "Yes, we offer integrations with popular tools like Slack, GitHub, and Microsoft Teams. Our API also allows you to build custom integrations for your specific needs."
  },
  {
    question: "How many projects can I manage?",
    answer: "The number of projects depends on your plan. Our Starter plan allows up to 3 active projects, while our Professional plan offers unlimited projects. For custom needs, check out our Enterprise plan."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial on all our plans. You can test all features and see how our project management solution can benefit your team before making a commitment."
  },
  {
    question: "How does the billing work?",
    answer: "We offer monthly and annual billing options. Annual billing comes with a 20% discount. You can upgrade, downgrade, or cancel your subscription at any time."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white dark:bg-gray-900 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg bg-gray-100 dark:bg-gray-800 transition duration-300 hover:shadow-md">
              <button
                className="flex w-full items-center justify-between p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

