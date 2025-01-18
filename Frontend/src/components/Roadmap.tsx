import React from "react";

interface RoadmapStep {
  title: string;
  description: string;
  completed: boolean;
}

const Roadmap: React.FC = () => {
  const steps: RoadmapStep[] = [
    {
      title: "1. Build Your Frontend",
      description: "Design and develop your application's frontend using modern tools and frameworks.",
      completed: true,
    },
    {
      title: "2. Prompt for Web3/Blockchain Code",
      description: "Generate or write smart contracts and integrate blockchain functionality into your app.",
      completed: false,
    },
    {
      title: "3. Import the Code File into Frontend",
      description: "Connect your frontend to the blockchain by importing the generated Web3 code.",
      completed: false,
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Project Roadmap</h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center p-6 border rounded-lg shadow-lg ${
                step.completed ? "bg-green-100 border-green-300" : "bg-white border-gray-300"
              }`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-white ${
                  step.completed ? "bg-green-500" : "bg-gray-500"
                }`}
              >
                {index + 1}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
