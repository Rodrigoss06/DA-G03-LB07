import React, { useContext } from 'react';
import Counter from '../components/Counter';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { UserContext } from '../components/UserContext';
import { ThemeContext } from '../components/ThemeContext';

const HomePage = () => {
  const { user, handleChangeUser } = useContext(UserContext); // Acceder al UserContext
  const { theme } = useContext(ThemeContext);

  const themeBgClass = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const themeTextClass = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <div
      className={` w-full flex flex-col items-center m-0  transition duration-500 ${theme === 'light' ? 'bg-theme-light-bg text-theme-light-text' : 'bg-theme-dark-bg text-theme-dark-text'}`}
    >
      <div className="w-full max-w-5xl px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Página de Inicio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 [grid-template-rows:200px] gap-4">

          
          <div className={`p-6 rounded-lg shadow-lg w-full flex items-center ${themeBgClass} ${themeTextClass}`}>
            <Counter />
          </div>

          <div className={`p-6 rounded-lg shadow-lg w-full flex items-center ${themeBgClass} ${themeTextClass}`}>
            <ThemeSwitcher />
          </div>

          <div className={`p-6 rounded-lg shadow-lg w-full flex flex-col items-center justify-center ${themeBgClass} ${themeTextClass}`}>
            <h2 className="text-2xl font-semibold mb-4">{`Hello, ${user}!`}</h2>
            <input
              type="text"
              value={user}
              onChange={handleChangeUser}
              className="border border-gray-400 p-2 rounded-md mb-4 w-full"
              placeholder="Cambia el nombre"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
