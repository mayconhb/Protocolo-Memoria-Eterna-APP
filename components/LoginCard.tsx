import React from 'react';
import { User, Mail, ArrowRight } from 'lucide-react';

interface LoginCardProps {
  onSubmit: (e: React.FormEvent) => void;
}

export const LoginCard: React.FC<LoginCardProps> = ({ onSubmit }) => {
  return (
    <div className="w-full rounded-3xl bg-white/10 p-8 backdrop-blur-md shadow-2xl border border-white/20">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-2 text-center">Bienvenido</h2>
        <p className="text-blue-100 text-sm text-center">
          Ingresa tus datos para acceder a tu plan personalizado.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-blue-100 ml-1">
            Nombre completo
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-blue-300 group-focus-within:text-brand-green transition-colors" />
            </div>
            <input
              id="name"
              type="text"
              required
              placeholder="Ej: Juan Pérez"
              className="block w-full rounded-xl border-0 bg-white/90 py-3.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-green sm:text-sm sm:leading-6 transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-blue-100 ml-1">
            Correo electrónico
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-blue-300 group-focus-within:text-brand-green transition-colors" />
            </div>
            <input
              id="email"
              type="email"
              required
              placeholder="tucorreo@ejemplo.com"
              className="block w-full rounded-xl border-0 bg-white/90 py-3.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-green sm:text-sm sm:leading-6 transition-all"
            />
          </div>
          <p className="mt-2 text-xs text-yellow-300 font-medium flex items-center gap-1 bg-yellow-400/10 p-2 rounded-lg border border-yellow-400/20">
            <span className="text-base">⚠️</span>
            Importante: Utiliza el mismo correo electrónico con el que realizaste la compra.
          </p>
        </div>

        <button
          type="submit"
          className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-brand-darkBlue bg-brand-green hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green transition-all transform active:scale-95 shadow-lg shadow-brand-green/30 mt-4"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <ArrowRight className="h-5 w-5 text-brand-darkBlue/70 group-hover:text-brand-darkBlue transition-colors" />
          </span>
          INGRESAR AHORA
        </button>
      </form>
    </div>
  );
};