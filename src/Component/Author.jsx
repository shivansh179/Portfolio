import React from 'react';
import { Link } from 'react-scroll'; // Assuming internal scrolling within your React app

const Author = () => {
  return (
    <div className="flex flex-col items-center bg-teal-700 w-full py-4">
      <p className="author-text font-bold text-center mb-0 px-4">
        Created using{' '}
        <Link
          href="https://reactjs.org/"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer underline text-green-500 hover:underline animate-underline animation-duration-300"
        >
          React.js
        </Link>
        ,{' '}
        <Link
          href="https://tailwindcss.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer underline text-green-500 hover:underline animate-underline animation-duration-300"
        >
          Tailwind CSS
        </Link>
        , and{' '}
        <Link
          href="https://www.framer.com/motion/"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer underline text-green-500 hover:underline animate-underline animation-duration-300"
        >
          Framer Motion
        </Link>
      </p>
      <p className="credit text-center font-bold ">Coded with ❤️ Shivansh Shukla</p>
    </div>
  );
};

export default Author;
