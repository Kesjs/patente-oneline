import { useEffect, useState } from 'react';
import '../assets/css/loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 20;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    // Simulate loading completion
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 3000);

    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loading-text">Caricamento in corso... {Math.round(progress)}%</div>
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
