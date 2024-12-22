import React from 'react';
import type { PricingPlan } from '../types';
import { Check } from 'lucide-react';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$9',
    features: [
      'Up to 5 team members',
      '3 active projects',
      'Basic project templates',
      'Email support'
    ],
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    price: '$29',
    features: [
      'Up to 20 team members',
      'Unlimited projects',
      'Advanced project templates',
      'Priority support',
      'Time tracking'
    ],
    cta: 'Start Pro Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'Custom templates',
      'Dedicated support',
      'Advanced security',
      'Custom integrations'
    ],
    cta: 'Contact Sales'
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">Choose your plan</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 shadow-lg transition duration-300 transform hover:scale-105 ${
                index === 1
                  ? 'bg-purple-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
              <p className="mb-4 text-3xl font-bold">
                {plan.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`mr-2 h-5 w-5 ${index === 1 ? 'text-purple-300' : 'text-purple-600 dark:text-purple-400'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-lg px-4 py-2 font-semibold transition duration-300 ${
                  index === 1
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

