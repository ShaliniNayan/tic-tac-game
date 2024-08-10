// This component represents each square on the board.

import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      className='w-16 h-16 bg-white border border-gray-400 text-2xl font-bold'
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
