import React, { useState, useEffect } from 'react';

const Text = () => {
  const staticText = "Hi, I'm";
  const phrases = ["Pranaya Pounikar", "a Frontend Developer"];
  const [currentText, setCurrentText] = useState('');
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isForward) {
        setEndValue((prev) => {
          if (prev >= phrases[index].length) {
            setIsForward(false);
            return prev;
          }
          return prev + 1;
        });
      } else {
        setEndValue((prev) => {
          if (prev <= 0) {
            setIsForward(true);
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [isForward, index, phrases]);

  useEffect(() => {
    setCurrentText(phrases[index].substring(0, endValue));
  }, [endValue, index, phrases]);

  return (
    <div className='transition ease duration-300'>
      {staticText} <span className='text-blue-400'>{currentText}</span>
    </div>
  );
}

export default Text;
