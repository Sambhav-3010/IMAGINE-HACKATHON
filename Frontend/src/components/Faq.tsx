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
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            You can return any item within 30 days of purchase.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you offer technical support?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer 24/7 technical support.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Where are you located?</AccordionTrigger>
          <AccordionContent>
            We are located in San Francisco, CA.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;