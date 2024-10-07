import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { CounterContext } from '../components/CounterContext';
import { UserContext } from '../components/UserContext'; // Importar UserContext

const AboutPage = () => {
  const { theme } = useContext(ThemeContext);
  const { count } = useContext(CounterContext);
  const { user } = useContext(UserContext); // Acceder al UserContext

  return (
    <div
      className={`min-h-screen p-10 transition duration-500 ${theme === 'light' ? 'bg-theme-light-bg text-theme-light-text' : 'bg-theme-dark-bg text-theme-dark-text'}`}
    >
      <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
      <p className="text-lg mb-4">
        Esta aplicación demuestra cómo usar <strong>React Context</strong> para compartir un estado global (como el tema, el contador y el nombre de usuario) entre múltiples componentes y páginas.
      </p>
      <div className="text-xl mt-4 p-4 bg-blue-100 dark:bg-blue-800 rounded-lg shadow-lg">
        <p>El valor actual del contador es: <strong>{count}</strong></p>
      </div>
      <div className="text-xl mt-4 p-4 bg-green-100 dark:bg-green-800 rounded-lg shadow-lg">
        <p>El usuario actual es: <strong>{user}</strong></p>
      </div>
    </div>
  );
};

export default AboutPage;
