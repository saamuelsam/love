import * as React from 'react';
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ClueProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText: string;
  image?: string;
  password?: string;
  passwordHint?: string;
  onNext: () => void;
}

const Clue: React.FC<ClueProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  buttonText, 
  image, 
  password,
  passwordHint,
  onNext 
}) => {
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = () => {
    if (!password) {
      onNext();
      return;
    }

    if (inputPassword.toLowerCase() === password.toLowerCase()) {
      setError('');
      onNext();
    } else {
      setError('Senha incorreta. Tente novamente!');
      setInputPassword('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
      {image && (
        <div className="relative h-full w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-58 object-contain"
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4 font-serif text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 text-center mb-8">
          {description}
        </p>
        <div className="space-y-4">
          {password && (
            <div className="relative">
              <input
                type="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Digite a senha..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit();
                  }
                }}
              />
              <button
                onClick={() => setShowHint(!showHint)}
                className="absolute right-2 top-2 text-sm text-pink-500 hover:text-pink-600"
              >
                {showHint ? 'Esconder dica' : 'Ver dica'}
              </button>
            </div>
          )}
          {password && showHint && passwordHint && (
            <p className="text-sm text-gray-500 italic text-center">
              Dica: {passwordHint}
            </p>
          )}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-red-500 hover:to-pink-600 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clue;