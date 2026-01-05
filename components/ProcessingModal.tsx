import React, { useEffect, useState } from 'react';
import { X, Clock, HelpCircle } from 'lucide-react';

interface ProcessingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProcessingModal: React.FC<ProcessingModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to allow render before animation starts
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      // Wait for animation to finish before unmounting
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-sm transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all duration-300 ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
      >
        <div className="bg-brand-blue p-4 flex justify-between items-center">
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <Clock className="h-5 w-5 text-brand-green" />
            Acceso en proceso
          </h3>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-2">
               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
            </div>
            
            <p className="text-gray-600">
              Tu compra está siendo procesada en este momento.
            </p>
            
            <p className="text-gray-800 font-medium">
              Pronto se liberará tu acceso automáticamente.
            </p>

            <div className="w-full h-px bg-gray-100 my-2"></div>

            <div className="bg-blue-50 rounded-lg p-3 w-full text-left">
              <div className="flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-brand-blue mb-1">¿Tienes dudas?</p>
                  <p>Contáctanos en:</p>
                  <a href="mailto:protocolome2026@gmail.com" className="text-brand-blue underline break-all font-medium">
                    protocolome2026@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-xl bg-brand-blue px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-darkBlue transition-colors"
            onClick={onClose}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};