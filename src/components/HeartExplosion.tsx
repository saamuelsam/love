import * as React from 'react';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const HeartExplosion: React.FC = () => {
  const [hearts, setHearts] = useState<Array<{
    id: number;
    offsetX: number;
    offsetY: number;
    rotation: number;
    scale: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      offsetX: (Math.random() - 0.5) * 400, // -200 to 200
      offsetY: (Math.random() - 0.5) * 400, // -200 to 200
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
      delay: Math.random() * 0.5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map(({ id, offsetX, offsetY, rotation, scale, delay }) => (
        <div
          key={id}
          className="absolute left-1/2 top-1/2 animate-heart-fly"
          style={{
            '--offset-x': `${offsetX}px`,
            '--offset-y': `${offsetY}px`,
            '--rotation': `${rotation}deg`,
            animationDelay: `${delay}s`,
          } as React.CSSProperties}
        >
          <Heart
            className="w-6 h-6 text-red-500 fill-current"
            style={{
              transform: `scale(${scale})`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default HeartExplosion;