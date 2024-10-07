import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';
import { CounterProvider } from './components/CounterContext';
import { ThemeProvider } from './components/ThemeContext';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CounterProvider>
          <UserProvider>
          <div className="min-h-screen flex flex-col w-screen">
            <nav className="bg-blue-600 p-4 shadow-lg">
              <ul className="flex justify-center space-x-8">
                <li>
                  <Link to="/" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
                    Configuraciones
                  </Link>
                </li>
              </ul>
            </nav>

            <main className="flex-grow  w-full flex justify-center">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </main>

          </div>
          </UserProvider>
        </CounterProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
