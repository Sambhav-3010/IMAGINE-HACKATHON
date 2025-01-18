import React from "react";
import { motion } from "framer-motion";

const Roadmap: React.FC = () => {
  const roadmapData = [
    { id: 1, title: "Mathematics", description: "Understanding linear algebra, calculus, probability, and optimization.", color: "bg-blue-900" },
    { id: 2, title: "Statistics", description: "Exploring probability distributions, hypothesis testing, and statistical analysis.", color: "bg-blue-700" },
    { id: 3, title: "Programming", description: "Learning Python, data structures, algorithms, and relevant libraries.", color: "bg-blue-500" },
    { id: 4, title: "Data Science & Exploratory Data Analysis", description: "Working with datasets, visualization, and feature engineering.", color: "bg-teal-500" },
    { id: 5, title: "Machine Learning", description: "Understanding supervised and unsupervised learning techniques.", color: "bg-teal-600" },
    { id: 6, title: "Deep Learning", description: "Exploring neural networks, CNNs, RNNs, and transformers.", color: "bg-teal-700" },
    { id: 7, title: "Advanced AI & ML Topics", description: "Studying NLP, reinforcement learning, and generative models.", color: "bg-amber-700" },
    { id: 8, title: "Hands-On Projects & Competitions", description: "Building real-world AI/ML projects and participating in Kaggle.", color: "bg-amber-600" },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10 text-white">AI/ML Roadmap</h1>
      <div className="relative flex flex-col items-center w-full max-w-4xl">
        {roadmapData.map((item, index) => (
          <motion.div
            key={item.id}
            className={`flex items-center w-full mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className={`rounded-2xl relative p-6 shadow-md text-left ${item.color} text-white cursor-pointer ${index % 2 === 0 ? "ml-4" : "mr-4"}`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
