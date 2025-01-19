import React from "react";
import { motion } from "framer-motion";

const Roadmap: React.FC = () => {
  const roadmapData = [
    { id: 1, title: "Build Your Frontend", description: "Create your frontend using your preferred framework or library.", color: "bg-blue-900" },
    { id: 2, title: "Prompt for Web3 Code", description: "Answer simple prompts to generate the required Web3 functionality.", color: "bg-blue-700" },
    { id: 3, title: "Understand the Code", description: "Review and customize the generated code in our integrated IDE.", color: "bg-blue-500" },
    { id: 4, title: "Connect MetaMask Wallet", description: "Log in to your MetaMask wallet for blockchain interaction.", color: "bg-teal-600" },
    { id: 5, title: "Deploy Code", description: "Automatically deploy the Web3 functionality with a single click.", color: "bg-teal-700" },
    { id: 6, title: "Import a Single File", description: "Download and import the Web3 file into your frontend project.", color: "bg-amber-600" },
    { id: 7, title: "Web3 Website Ready", description: "Your Web3-enabled website or app is live in minutes!", color: "bg-amber-700" },
];


  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10 text-white">How to Use</h1>
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
              className={`rounded-2xl relative p-6 shadow-md text-left ${item.color} text-white cursor-pointer mx-10 `}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
