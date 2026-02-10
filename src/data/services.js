import { FaCode, FaMobile, FaPalette, FaServer, FaShoppingCart, FaRocket } from 'react-icons/fa';

export const servicesData = [
  {
    id: 1,
    title: "Web Development",
    icon: FaCode,
    description: "Building responsive, high-performance websites using modern technologies like React, Node.js, and more.",
    features: [
      "Responsive Design",
      "Modern UI/UX",
      "SEO Optimized",
      "Fast Loading Speed",
      "Cross-browser Compatible"
    ],
    price: "Starting from ₹15,000",
    popular: false,
    color: "#6366f1"
  },
  {
    id: 2,
    title: "Full Stack Development",
    icon: FaServer,
    description: "End-to-end web application development with frontend, backend, database, and deployment solutions.",
    features: [
      "Custom Web Applications",
      "RESTful API Development",
      "Database Design",
      "Cloud Deployment",
      "Maintenance & Support"
    ],
    price: "Starting from ₹30,000",
    popular: true,
    color: "#ec4899"
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: FaMobile,
    description: "Creating beautiful, native-like mobile applications for iOS and Android using React Native.",
    features: [
      "Cross-platform Apps",
      "Native Performance",
      "Push Notifications",
      "Offline Support",
      "App Store Deployment"
    ],
    price: "Starting from ₹40,000",
    popular: false,
    color: "#10b981"
  },
  {
    id: 4,
    title: "UI/UX Design",
    icon: FaPalette,
    description: "Designing intuitive and visually appealing user interfaces that enhance user experience.",
    features: [
      "Wireframing & Prototyping",
      "User Research",
      "Interactive Mockups",
      "Design Systems",
      "Usability Testing"
    ],
    price: "Starting from ₹10,000",
    popular: false,
    color: "#f59e0b"
  },
  {
    id: 5,
    title: "E-Commerce Solutions",
    icon: FaShoppingCart,
    description: "Complete e-commerce platforms with payment integration, inventory management, and admin panels.",
    features: [
      "Shopping Cart System",
      "Payment Gateway Integration",
      "Product Management",
      "Order Tracking",
      "Customer Dashboard"
    ],
    price: "Starting from ₹50,000",
    popular: false,
    color: "#8b5cf6"
  },
  {
    id: 6,
    title: "Performance Optimization",
    icon: FaRocket,
    description: "Improving website speed, performance, and SEO to boost user engagement and search rankings.",
    features: [
      "Speed Optimization",
      "Code Refactoring",
      "SEO Enhancement",
      "Performance Monitoring",
      "Bug Fixing"
    ],
    price: "Starting from ₹8,000",
    popular: false,
    color: "#ef4444"
  }
];

// Customize this data with your actual services and pricing