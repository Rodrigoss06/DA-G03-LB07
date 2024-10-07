import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Counter = () => {
  const { count, increment } = useContext(CounterContext);

  return (
    <div className="flex flex-col items-center justify-center  ">
      <h2 className="text-2xl font-bold mb-4">{`Contador: ${count}`}</h2>
      <button
        onClick={increment}
        className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
      >
        Incrementar
      </button>
    </div>
  );
};

export default Counter;
