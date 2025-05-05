'use client';

// import { motion } from 'framer-motion'; // 주석 처리
// import Lottie from 'lottie-react'; // 주석 처리
// import { useState, useEffect } from 'react'; // 주석 처리

export default function Hero() {
  // const [animationData, setAnimationData] = useState(null); // 주석 처리

  // useEffect(() => { // 주석 처리
  //   fetch('/animations/ai-workflow.json')
  //     .then((response) => response.json())
  //     .then((data) => setAnimationData(data))
  //     .catch((error) => console.error('Error fetching animation data:', error));
  // }, []);

  return (
    <section
      // 배경 이미지 및 관련 스타일 제거
      className="relative bg-gradient-to-r from-deep via-black to-deep text-light py-32 px-6 overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" /> */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-xl"
        >
          “AI 시대,<br className="sm:hidden" />
          일의 흐름을 <span className="text-brand">다시 설계하다</span>”
        </h1>
        <p
          className="text-lg sm:text-xl lg:text-2xl text-olive mb-10 font-medium drop-shadow"
        >
          위브앤은 실행을 통해 사람과 조직의 가능성을 실현합니다.
        </p>
        <div
          className="w-full max-w-lg mx-auto"
        >
          {/* Lottie 컴포넌트 제거 */}
          {/* {animationData && (
            <Lottie animationData={animationData} loop={true} />
          )} */}
          {/* 임시 Placeholder 추가 */}
          <div className="h-64 bg-brand/30 rounded-xl flex items-center justify-center text-light/50">
            (Visual Placeholder)
          </div>
        </div>
      </div>
    </section>
  );
} 