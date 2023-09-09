import React from 'react';
import sound from 'src/assets/audio/wrong-answer-129254.mp3';
import useSound from 'use-sound';

const Home: React.FC = () => {
  const [play] = useSound(sound, {
    interrupt: true,
  });

  React.useEffect(() => {
    play();
  }, [play]);
  return <div>Home</div>;
};

export { Home };
