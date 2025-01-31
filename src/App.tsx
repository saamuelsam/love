import * as React from 'react';
import { useState } from 'react';
import { Heart, Key, Book, Music, Umbrella, Smile } from 'lucide-react';
import Clue from './components/Clue';
import FinalPage from './components/FinalPage';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const clues = [
    {
      title: "Bem-vindo à Caça ao Tesouro!",
      description: "Siga as pistas para encontrar algo especial que preparei para você. Há senhas que você terá que descobrir para desbloquear a próxima pista. O último é o mais difícil, mas sei que você consegue!",
      icon: Heart,
      buttonText: "Começar a aventura"
    },
    {
      title: "Primeira Pista",
      description: "Nesta foto que tiramos juntos, o que você estava no seu pulso direito?",
      icon: Key,
      buttonText: "Próxima Pista",
      image: "https://media.discordapp.net/attachments/1319359936521830410/1328570164761071686/1.jpg?ex=679e4122&is=679cefa2&hm=691fc6d5726a5e0a9f1d36725bfca53c6bf37eee62b8321a438522e0877f665c&=&format=webp&width=368&height=633",
      password: "xuxinha",
      passwordHint: "Cabelo"
    },
    {
      title: "Segunda Pista",
      description: "Encontre algo na casa que diz 'Amor', mas não fala com palavras.",
      icon: Book,
      buttonText: "Próxima Pista",
      image: "/source/4.jpg",
      password: "caixinha",
      passwordHint: "caixinha."
    },
    {
      title: "Terceira Pista",
      description: "No nosso último jantar romântico, o que eu te falei para lembrar?",
      icon: Music,
      buttonText: "Próxima Pista",
      image: "/source/8.png",
      password: "dende01",
      passwordHint: "oleo"
    },
    {
      title: "Quarta Pista",
      description: "primeiro filme que assistimos no cinema?",
      icon: Umbrella,
      buttonText: "Encontrar a Chave",
      image: "/source/9.png",
      password: "deadpool",
      passwordHint: "vermelho"
    },
    {
      title: "Última Pista",
      description: "Desvende o enigma: **Eu + você + suco. O que é?**",
      icon: Smile,
      buttonText: "Abrir a Porta",
      image: "/source/10.png",
      password: "cajaemaracuja",
      passwordHint: "Fruta cítrica e refrescante."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200">
      <div className="container mx-auto px-4 py-8">
        {currentStep < clues.length ? (
          <Clue 
            {...clues[currentStep]} 
            onNext={() => setCurrentStep(prev => prev + 1)}
          />
        ) : (
          <FinalPage />
        )}
      </div>
    </div>
  );
}

export default App;
