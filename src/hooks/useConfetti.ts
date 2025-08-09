import { useEffect } from 'react';

const useConfetti = () => {
  useEffect(() => {
    const loadConfetti = async () => {
      const confetti = (await import('canvas-confetti')).default;
      
      // Create multiple confetti bursts for a grand entrance
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Left side confetti
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        
        // Right side confetti
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
    };

    // Small delay to let the page load
    const timer = setTimeout(loadConfetti, 800);
    
    return () => clearTimeout(timer);
  }, []);
};

export default useConfetti;