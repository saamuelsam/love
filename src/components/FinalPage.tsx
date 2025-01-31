import * as React from 'react';
import { useState, useEffect } from 'react';
import { DoorOpen, Heart, Lock } from 'lucide-react';
import HeartExplosion from './HeartExplosion';

const FinalPage: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [audio] = useState(new Audio('https://cdn.discordapp.com/attachments/1319359936521830410/1334984703215669298/Elvis_Presley_-_Cant_Help_Falling_In_Love_Official_Audio.mp3?ex=679e84e4&is=679d3364&hm=f2100dc7d03319f5f83200a9b2526df1ca8c2f8bdbc4c2c0ef5dc19a36021f9a&'));

  const correctPassword = '03062024'; // Change this to your desired password

  useEffect(() => {
    if (isRevealed) {
      audio.loop = true;
      audio.volume = 0.5;
      audio.play().catch(error => {
        console.log("Audio playback failed:", error);
      });
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isRevealed, audio]);

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsRevealed(true);
      setError('');
    } else {
      setError('Senha incorreta. Tente novamente!');
      setPassword('');
    }
  };

  const handleAccept = () => {
    setShowHearts(true);
    setAccepted(true);
  };

  return (
    <div className="max-w-md mx-auto">
      {showHearts && <HeartExplosion />}
      {!isRevealed ? (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
          <div className="relative h-58">
            <img
              src="https://media.discordapp.net/attachments/1319359936521830410/1334983940825677834/11.png?ex=679e842e&is=679d32ae&hm=f06556108b25fe58852ab90de27a23f69d71fc1879c0bbb4d61dc1f620550c67&=&format=webp&quality=lossless"
              alt="Door"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4 font-serif text-gray-800">
              Encontre a chave!
            </h2>
            <p className="text-gray-600 text-center mb-6">
              A senha é a data do nosso primeiro beijo.
            </p>
            <div className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handlePasswordSubmit();
                  }
                }}
              />
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                onClick={handlePasswordSubmit}
                className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-red-500 hover:to-pink-600 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              >
                Abrir a Porta
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden p-8 animate-fade-in">
          <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
            <Heart className="w-16 h-16 text-red-500 animate-pulse" />
            <h1 className="text-4xl font-bold text-center font-serif text-gray-800">
              {accepted ? "❤️ Pode abrir! ❤️" : "Preparada?"}
            </h1>
            {!accepted && (
              <div className="flex space-x-4">
                <button
                  onClick={handleAccept}
                  className="px-8 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transform transition-all duration-300 hover:scale-105"
                >
                  Sim ❤️
                </button>
                <button className="px-8 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transform transition-all duration-300 hover:scale-105 opacity-50 cursor-not-allowed">
                  Não
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalPage;
