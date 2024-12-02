import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

interface TypeWriterEffectProps {
  text: string[];
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit';
  sx?: React.CSSProperties;
}

const TypeWriterEffect: React.FC<TypeWriterEffectProps> = ({ text, variant, sx }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex < text.length) {
      const interval = setInterval(() => {
        const currentString = text[currentTextIndex];
        if (charIndex < currentString.length) {
          setDisplayText((prev) => prev + currentString[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayText('');
            setCharIndex(0);
            setCurrentTextIndex((prev) => (prev + 1) % text.length);
          }, 2000); // Delay before showing the next text
        }
      }, 100); // Typing speed
      return () => clearInterval(interval);
    }
  }, [charIndex, currentTextIndex, text]);

  return (
    <Typography variant={variant} sx={{ ...sx, whiteSpace: 'nowrap', overflow: 'hidden', minHeight: '70px' }}>
       {displayText}
    </Typography>
  );
};

export default TypeWriterEffect;
