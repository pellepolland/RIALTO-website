import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import './AnimatedText.css';

interface AnimatedTextProps {
  texts: string[];
}

const AnimatedText = ({ texts }: AnimatedTextProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="animated-text-container">
      <span className="animated-text-wrapper">
        <Typewriter
          options={{
            strings: texts,
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
            cursor: '|',
            wrapperClassName: "typewriter-text",
            cursorClassName: "typewriter-cursor",
          }}
        />
      </span>
    </div>
  );
};

export default AnimatedText; 