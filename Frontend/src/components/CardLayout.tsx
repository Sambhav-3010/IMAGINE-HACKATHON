import React, { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const CardLayout: FC = () => {
  return (
    <div className="p-12 px-24 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Small Card */}
        <Card className="h-48 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Create Solidity code for blockchain projects with ease using our app, supporting robust smart contracts</CardTitle>
          </CardHeader>
        </Card>

        {/* Small Card */}
        <Card className="h-48 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Seamlessly connect Metamask or other crypto wallets for a secure experience</CardTitle>
          </CardHeader>
        </Card>

        {/* Large Card */}
        <Card className="h-48 col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Test and debug smart contracts in a safe, simulated blockchain environment</CardTitle>
          </CardHeader>
          <CardContent>
          Receive step-by-step explanations for every block of code, making it beginner-friendly
          Get user confirmations for inputs and tailor outputs based on their needs.
          </CardContent>
        </Card>

        {/* Small Card */}
        <Card className="h-48 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Gain in-depth explanations of how the code works and how to implement it effectively.</CardTitle>
          </CardHeader>
        </Card>

        {/* Large Card */}
        <Card className="h-48 col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Empower anyone to launch blockchain projects without coding expertise.</CardTitle>
          </CardHeader>
          <CardContent>
          Speed up blockchain project creation and innovation in the Web3 ecosystem.
          
          </CardContent>
        </Card>

        {/* Small Card */}
        <Card className="h-48 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Allow users to prioritize business and creative ideas without technical constraints.</CardTitle>
          </CardHeader>
        </Card>

        {/* Large Card */}
        <Card className="h-48 col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>We prioritize robust security measures in our code to protect users from vulnerabilities and unauthorized access</CardTitle>
          </CardHeader>
          <CardContent>
          Our code adheres to industry standards and regulations, minimizing risks and ensuring a safe and reliable user experience          
          </CardContent>
        </Card>

        {/* Small Card */}
        <Card className="h-48 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Utilize AI-driven input validation to refine user inputs and provide clear, actionable suggestions</CardTitle>
          </CardHeader>
        </Card>

        {/* Small Card */}
        <Card className="h-48 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Design and generate smart contracts optimized for minimal gas fees, ensuring cost-effective blockchain interactions</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default CardLayout;
