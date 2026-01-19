export const blogArticles = [
  {
    id: 1,
    title: "Building Scalable React Apps: Best Practices",
    slug: "building-scalable-react-applications",
    excerpt: "Learn the essential patterns and practices for creating maintainable React applications that can grow with your business needs.",
    content: "In this comprehensive guide, we'll explore the fundamental principles of building scalable React applications. From proper component architecture to state management strategies, discover how to write code that stands the test of time...",
    author: "Your Name",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "JavaScript", "Web Development"],
    image: "/images/blog/react-scalable.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Mastering CSS Grid: A Complete Guide",
    slug: "mastering-css-grid-complete-guide",
    excerpt: "Unlock the full potential of CSS Grid with practical examples and real-world use cases that will transform your layout skills.",
    content: "CSS Grid has revolutionized the way we create layouts on the web. This guide takes you from the basics to advanced techniques, showing you how to build complex, responsive layouts with ease...",
    author: "Your Name",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "CSS",
    tags: ["CSS", "Grid", "Frontend"],
    image: "/images/blog/css-grid.jpg",
    featured: true
  },
  {
    id: 3,
    title: "The Power of TypeScript in Modern Development",
    slug: "power-of-typescript-modern-development",
    excerpt: "Discover how TypeScript can improve your development workflow, catch bugs early, and make your codebase more maintainable.",
    content: "TypeScript has become an essential tool for modern JavaScript developers. In this article, we explore why TypeScript is more than just 'JavaScript with types' and how it can dramatically improve your development experience...",
    author: "Your Name",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Development"],
    image: "/images/blog/typescript.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Understanding JavaScript Closures",
    slug: "understanding-javascript-closures",
    excerpt: "A deep dive into one of JavaScript's most powerful features and how to use closures effectively in your applications.",
    content: "Closures are a fundamental concept in JavaScript that every developer should understand. This article breaks down what closures are, how they work, and provides practical examples of using them in real applications...",
    author: "Your Name",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Fundamentals", "Tutorial"],
    image: "/images/blog/closures.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Building RESTful APIs with Node.js and Express",
    slug: "building-restful-apis-nodejs-express",
    excerpt: "Step-by-step guide to creating robust, scalable APIs using Node.js and Express framework with best practices.",
    content: "Learn how to build production-ready RESTful APIs using Node.js and Express. We'll cover routing, middleware, error handling, authentication, and deployment strategies...",
    author: "Your Name",
    date: "2023-12-20",
    readTime: "12 min read",
    category: "Backend",
    tags: ["Node.js", "Express", "API", "Backend"],
    image: "/images/blog/nodejs-api.jpg",
    featured: true
  },
  {
    id: 6,
    title: "Responsive Web Design: Mobile-First Approach",
    slug: "responsive-web-design-mobile-first",
    excerpt: "Why mobile-first design matters and how to implement it effectively in your next project.",
    content: "With mobile devices accounting for over 50% of web traffic, mobile-first design is no longer optional. This guide shows you how to approach responsive design from a mobile-first perspective...",
    author: "Your Name",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Design",
    tags: ["Responsive", "CSS", "Mobile", "UX"],
    image: "/images/blog/mobile-first.jpg",
    featured: false
  },
  {
    id: 7,
    title: "State Management in React: Redux vs Context API",
    slug: "state-management-redux-vs-context",
    excerpt: "Compare different state management solutions and learn when to use each approach in your React applications.",
    content: "State management is crucial for complex React applications. We'll compare Redux, Context API, and other solutions to help you choose the right tool for your project...",
    author: "Your Name",
    date: "2023-12-10",
    readTime: "11 min read",
    category: "React",
    tags: ["React", "Redux", "State Management"],
    image: "/images/blog/state-management.jpg",
    featured: false
  },
  {
    id: 8,
    title: "Web Performance Optimization Techniques",
    slug: "web-performance-optimization-techniques",
    excerpt: "Practical tips and tools to make your website faster, improving user experience and SEO rankings.",
    content: "Website performance directly impacts user experience and conversion rates. Learn proven techniques to optimize loading times, reduce bundle sizes, and improve overall performance...",
    author: "Your Name",
    date: "2023-12-05",
    readTime: "10 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Development"],
    image: "/images/blog/performance.jpg",
    featured: false
  }
];

// Helper functions
export const getFeaturedArticles = () => {
  return blogArticles.filter(article => article.featured);
};

export const getArticleBySlug = (slug) => {
  return blogArticles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category) => {
  return blogArticles.filter(article => article.category === category);
};

export const getArticlesByTag = (tag) => {
  return blogArticles.filter(article => article.tags.includes(tag));
};

export const getAllCategories = () => {
  return [...new Set(blogArticles.map(article => article.category))];
};

export const getAllTags = () => {
  const tags = blogArticles.flatMap(article => article.tags);
  return [...new Set(tags)];
};