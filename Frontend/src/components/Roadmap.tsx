import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Roadmap: React.FC = () => {
  const roadmapData = [
    { id: 1, title: "Mathematics", description: "Understanding linear algebra, calculus, probability, and optimization.", modalInfo: "Understanding linear algebra, calculus, probability, and optimization.", resources: ["Linear Algebra Done Right", "3Blue1Brown (YouTube)"], color: "bg-blue-900" },
    { id: 2, title: "Statistics", description: "Exploring probability distributions, hypothesis testing, and statistical analysis.", modalInfo: "Exploring probability distributions, hypothesis testing, and statistical analysis.", resources: ["StatQuest (YouTube)", "Introduction to Statistical Learning"], color: "bg-blue-700" },
    { id: 3, title: "Programming", description: "Learning Python, data structures, algorithms, and relevant libraries.", modalInfo: "Learning Python, data structures, algorithms, and relevant libraries.", resources: ["Python.org", "LeetCode", "GeeksForGeeks"], color: "bg-blue-500" },
    { id: 4, title: "Data Science & Exploratory Data Analysis", description: "Working with datasets, visualization, and feature engineering.", modalInfo: "Working with datasets, visualization, and feature engineering.", resources: ["Pandas Documentation", "Matplotlib/Seaborn Tutorials", "Kaggle"], color: "bg-teal-500" },
    { id: 5, title: "Machine Learning", description: "Understanding supervised and unsupervised learning techniques.", modalInfo: "Understanding supervised and unsupervised learning techniques.", resources: ["Andrew Ng's ML Course", "Scikit-Learn Documentation", "Hands-On Machine Learning"], color: "bg-teal-600" },
    { id: 6, title: "Deep Learning", description: "Exploring neural networks, CNNs, RNNs, and transformers.", modalInfo: "Exploring neural networks, CNNs, RNNs, and transformers.", resources: ["Deep Learning Specialization", "PyTorch/TensorFlow", "Fast.ai"], color: "bg-teal-700" },
    { id: 7, title: "Advanced AI & ML Topics", description: "Studying NLP, reinforcement learning, and generative models.", modalInfo: "Studying NLP, reinforcement learning, and generative models.", resources: ["Transformers (Hugging Face)", "OpenAI Gym", "Deep Reinforcement Learning by Sutton"], color: "bg-amber-700" },
    { id: 8, title: "Hands-On Projects & Competitions", description: "Building real-world AI/ML projects and participating in Kaggle.", modalInfo: "Building real-world AI/ML projects and participating in Kaggle.", resources: ["Kaggle", "GitHub", "AI/ML Competitions"], color: "bg-amber-600" },
  ];

  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(null);
  const [selectedItem, setSelectedItem] = useState<{ title: string; modalInfo: string; resources: string[] } | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastScrollY = useRef<number>(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection("up");
    }
    lastScrollY.current = currentScrollY;
  };

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && scrollDirection === "down") {
        setVisibleItems((prev) => (!prev.includes(Number(entry.target.id)) ? [...prev, Number(entry.target.id)] : prev));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    observerRef.current = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    const elements = document.querySelectorAll(".roadmap-item");
    elements.forEach((element) => observerRef.current?.observe(element));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, [scrollDirection]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10 text-white">AI/ML Roadmap</h1>
      <div className="relative flex flex-col items-center w-full max-w-4xl">
        {roadmapData.map((item, index) => (
          <motion.div
            key={item.id}
            id={String(item.id)}
            className={`roadmap-item flex items-center w-full mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <motion.div
              className={`rounded-2xl relative p-6 shadow-md text-left ${item.color} text-white cursor-pointer ${index % 2 === 0 ? "ml-4" : "mr-4"}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: visibleItems.includes(item.id) ? 1 : 0, y: visibleItems.includes(item.id) ? 0 : 50 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedItem({ title: item.title, modalInfo: item.modalInfo, resources: item.resources })}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedItem.title}</h2>
              <p className="text-gray-700 leading-relaxed">{selectedItem.modalInfo}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Resources:</h3>
              <ul className="space-y-2">
                {selectedItem.resources.map((resource, index) => (
                  <li
                    key={index}
                    className="flex items-center cursor-pointer space-x-2 text-gray-700 hover:text-blue-600 transition"
                  >
                    <span className="material-icons text-blue-600">o</span>
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(resource)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded w-full font-medium hover:bg-blue-700 transition"
              onClick={() => setSelectedItem(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
