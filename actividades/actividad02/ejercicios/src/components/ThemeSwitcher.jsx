import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 rounded-lg transition duration-300 ease-in-out ${
        theme === 'light'
          ? 'bg-white text-black'
          : 'bg-gray-800 text-white'
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4">{`Tema actual: ${theme}`}</h2>
      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Cambiar tema
      </button>
    </div>
  );
};

export default ThemeSwitcher;
