import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const Faq: React.FC = () => {
  return (
    <div className=" text-white m-10 px-52 py-10 ">
      <Accordion type="single" collapsible className='bg-gray-800 p-4 px-10 pb-12 rounded-lg shadow-lg border border-gray-600'>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do I need to know Web3 to use this platform?</AccordionTrigger>
          <AccordionContent>
          No, you don’t need any prior knowledge of Web3. Our platform handles the complexity for you, so you can focus on your frontend development.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is a MetaMask wallet, and why do I need one?</AccordionTrigger>
          <AccordionContent>
          MetaMask is a browser extension and mobile app that acts as a cryptocurrency wallet and gateway to interact with blockchain applications. You’ll need a MetaMask wallet to connect to the blockchain and deploy Web3 functionality in your project.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How does this platform work?</AccordionTrigger>
          <AccordionContent>
          You’ll answer a few simple prompts related to your project’s Web3 needs.
          The platform will generate a single file tailored to your requirements.
          You’ll import this file into your frontend project to deploy the Web3 functionality.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What if I don’t have cryptocurrency?</AccordionTrigger>
          <AccordionContent>
          You can use testnet faucets to get free test cryptocurrency for testing purposes. For mainnet deployment, you’ll need to purchase cryptocurrency through exchanges.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;