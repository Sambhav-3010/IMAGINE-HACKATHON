'use client'

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const EnhancedCardLayout: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-48 px-24 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={cn(
              "relative group",
              card.large ? "md:col-span-2 lg:col-span-3 xl:col-span-2" : ""
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Card
              className={cn(
                "relative bg-gray-800 border-gray-700 text-white transition-all duration-300 h-full",
                "group-hover:border-purple-500 group-hover:border-opacity-50"
              )}
            >
              <CardHeader>
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              </CardHeader>
              {card.content && (
                <CardContent className="text-xs text-gray-400">
                  {card.content}
                </CardContent>
              )}
            </Card>
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 bg-purple-500 opacity-20 rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const cards = [
  {
    title: "Create Solidity code for blockchain projects with ease using our app, supporting robust smart contracts",
  },
  {
    title: "Seamlessly connect Metamask or other crypto wallets for a secure experience",
  },
  {
    title: "Test and debug smart contracts in a safe, simulated blockchain environment",
    content: "Receive step-by-step explanations for every block of code, making it beginner-friendly. Get user confirmations for inputs and tailor outputs based on their needs.",
    large: true,
  },
  {
    title: "Gain in-depth explanations of how the code works and how to implement it effectively.",
  },
  {
    title: "Empower anyone to launch blockchain projects without coding expertise.",
    content: "Speed up blockchain project creation and innovation in the Web3 ecosystem.",
    large: true,
  },
  {
    title: "Allow users to prioritize business and creative ideas without technical constraints.",
  },
  {
    title: "We prioritize robust security measures in our code to protect users from vulnerabilities and unauthorized access",
    content: "Our code adheres to industry standards and regulations, minimizing risks and ensuring a safe and reliable user experience",
    large: true,
  },
  {
    title: "Utilize AI-driven input validation to refine user inputs and provide clear, actionable suggestions",
  },
  {
    title: "Design and generate smart contracts optimized for minimal gas fees, ensuring cost-effective blockchain interactions",
  },
];

export default EnhancedCardLayout;

