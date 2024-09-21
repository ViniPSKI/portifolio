import { useState, useEffect } from 'react';

interface AlertProps {
  message: string;
  duration?: number;
}

const Alert = ({ message, duration = 3000 }: AlertProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fadeOutTimer = setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => clearTimeout(fadeOutTimer);
    }, duration);

    // Limpa o timer do alerta quando o componente desmontar
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-4 right-0 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg dark:shadow-zinc-800 transition-all duration-500 ease-in-out bg-zinc-100 border border-emerald-400 dark:bg-zinc-900">
      {message}
    </div>
  );
};

export default Alert;
