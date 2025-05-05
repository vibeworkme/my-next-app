'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animations/ai-workflow.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error fetching animation data:', error));
  }, []);

  return (
    <section
      className="relative bg-gradient-to-r from-deep via-black to-deep text-light py-32 px-6 overflow-hidden"
      style={{
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          "AI 시대,<br className="sm:hidden" />
          일의 흐름을 <span className="text-brand">다시 설계하다</span>"
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-olive mb-10 font-medium drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          위브앤은 실행을 통해 사람과 조직의 가능성을 실현합니다.
        </motion.p>
        <motion.div
          className="w-full max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          {animationData && (
            <Lottie animationData={animationData} loop={true} />
          )}
        </motion.div>
      </div>
    </section>
  );
} 