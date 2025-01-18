import React from 'react';
import Editor from '@/components/Editor';

const Console = () => {
  return (
    <div className="flex">
      <div className="w-1/2 border-2 border-gray-400 h-screen bg-gray-300">
        <Editor />
      </div>
      <div className="w-1/2">
        {/* Add any other content you want on the right side */}
      </div>
    </div>
  );
};

export default Console;
