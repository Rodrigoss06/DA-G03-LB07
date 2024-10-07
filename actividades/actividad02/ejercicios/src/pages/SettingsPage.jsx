import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { UserContext } from '../components/UserContext'; // Importar UserContext

const SettingsPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, handleChangeUser } = useContext(UserContext); // Acceder al UserContext

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition duration-500 ${theme === 'light' ? 'bg-theme-light-bg text-theme-light-text' : 'bg-theme-dark-bg text-theme-dark-text'}`}
    >
      <h1 className="text-4xl font-bold mb-6">Configuraciones</h1>
      
      {/* Tema */}
      <h3 className="text-2xl mb-4">{`Tema actual: ${theme}`}</h3>
      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mb-6"
      >
        Cambiar Tema
      </button>

      {/* Usuario */}
      <h3 className="text-2xl mb-4">{`Usuario actual: ${user}`}</h3>
      <input
        type="text"
        value={user}
        onChange={handleChangeUser}
        className="border border-gray-400 p-2 rounded-md mb-4"
        placeholder="Cambia el nombre de usuario"
      />
    </div>
  );
};

export default SettingsPage;
