export interface Testimonial {
    content: string;
    author: string;
    role: string;
    avatar: string;
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface PricingPlan {
    name: string;
    price: string;
    features: string[];
    cta: string;
  }
  
  export interface SearchResult {
    id: string;
    title: string;
    snippet: string;
    source: string;
    date: string;
  }