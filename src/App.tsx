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
      image: "https://media.discordapp.net/attachments/1319359936521830410/1328570165230571540/72.jpg?ex=679e4123&is=679cefa3&hm=f65a99e1c25eb7f288826314e93e10fada0219f21d38c98e485024414b01a507&=&format=webp&width=356&height=633",
      password: "caixinha",
      passwordHint: "caixinha."
    },
    {
      title: "Terceira Pista",
      description: "No nosso último jantar romântico, o que eu te falei para lembrar?",
      icon: Music,
      buttonText: "Próxima Pista",
      image: "https://media.discordapp.net/attachments/1319359936521830410/1334983940477288609/8.png?ex=679e842e&is=679d32ae&hm=77742bd11ca17de1c2f1e97c9c7472411b9dfa834eef8965a2e08f417d6e4ec0&=&format=webp&quality=lossless&width=842&height=633",
      password: "dende01",
      passwordHint: "oleo"
    },
    {
      title: "Quarta Pista",
      description: "primeiro filme que assistimos no cinema?",
      icon: Umbrella,
      buttonText: "Encontrar a Chave",
      image: "https://media.discordapp.net/attachments/1319359936521830410/1334984194329284780/Captura_de_tela_2025-01-31_152910.png?ex=679e846a&is=679d32ea&hm=6d8c2b3e218fdc62c509d2df5baa82f54af27b01bf31fabecea083f4ac4efb45&=&format=webp&quality=lossless&width=477&height=633",
      password: "deadpool",
      passwordHint: "vermelho"
    },
    {
      title: "Última Pista",
      description: "Desvende o enigma: **Eu + você + suco. O que é?**",
      icon: Smile,
      buttonText: "Abrir a Porta",
      image: "https://media.discordapp.net/attachments/1319359936521830410/1334984341062811759/10.png?ex=679e848d&is=679d330d&hm=47b8631a919169edc15f027501b38458c42edef2b1e73b5254bf4d7ec0cc4370&=&format=webp&quality=lossless&width=633&height=633",
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
