'use client';

import { useState, useEffect } from 'react';

export default function DynamicTextRotator({
  words = [
    'Database Assets.',
    'Zero-Trust Defenses.',
    'Aviation Fleets.',
    'Industrial Lines.',
    'Banking Rails.',
  ],
  typingSpeed = 58,
  deleteSpeed = 30,
  pauseEnd = 2200,
  pauseStart = 360,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0] || '');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    let timeoutId;
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting) {
      // Typing forward
      if (text.length < currentWord.length) {
        setIsBlinking(false);
        const randomJitter = Math.floor(Math.random() * 22) - 11;
        const delay = Math.max(32, typingSpeed + randomJitter);
        timeoutId = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, delay);
      } else {
        // Finished typing current word
        setIsBlinking(true);
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
          setIsBlinking(false);
        }, pauseEnd);
      }
    } else {
      // Deleting backward
      if (text.length > 0) {
        setIsBlinking(false);
        timeoutId = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deleteSpeed);
      } else {
        // Finished deleting
        setIsBlinking(true);
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, pauseStart);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deleteSpeed, pauseEnd, pauseStart]);

  return (
    <span
      className="typing-rotator-container"
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        verticalAlign: 'baseline',
        position: 'relative',
        minHeight: '1.2em',
      }}
    >
      <span
        className="rotator-text-wrapper"
        style={{
          display: 'inline-block',
          color: '#38bdf8',
          fontWeight: 750,
          textShadow: 'none',
          filter: 'none',
        }}
      >
        {text}
      </span>

      <span
        className="typing-cursor"
        aria-hidden="true"
        style={{
          display: 'inline-block',
          marginLeft: '3px',
          color: '#38bdf8',
          fontWeight: 300,
          textShadow: 'none',
          filter: 'none',
          opacity: isBlinking ? undefined : 1,
          animation: isBlinking ? 'typingCursorBlink 0.9s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
        }}
      >
        |
      </span>

      <style jsx>{`
        @keyframes typingCursorBlink {
          0%,
          100% {
            opacity: 1;
            transform: scaleY(1);
          }
          50% {
            opacity: 0;
            transform: scaleY(0.85);
          }
        }
      `}</style>
    </span>
  );
}
