import React, { useState } from 'react';
import { Background } from './components/Background';
import { LoginCard } from './components/LoginCard';
import { ProcessingModal } from './components/ProcessingModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginAttempt = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4">
      <Background />
      
      <main className="relative z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          {/* Logo / Icon Placeholder - Brain concept */}
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm shadow-xl ring-2 ring-brand-green/50">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-white">
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
              <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
              <path d="M6 18a4 4 0 0 1-1.97-1.375" />
              <path d="M19.97 16.625A4.002 4.002 0 0 1 18 18" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
            PROTOCOLO <br />
            <span className="text-brand-green">MENTE ETERNA</span>
          </h1>
        </div>

        <LoginCard onSubmit={handleLoginAttempt} />
      </main>

      {/* Footer Text */}
      <footer className="relative z-10 mt-8 text-center text-xs text-blue-200/60">
        <p>© 2024 Protocolo Mente Eterna. Todos los derechos reservados.</p>
      </footer>

      <ProcessingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;