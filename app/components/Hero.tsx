'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function Hero() {
  // 텍스트 애니메이션 효과를 위한 상태
  const [visible, setVisible] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  
  useEffect(() => {
    setVisible(true);
    
    // Lottie 애니메이션 데이터 가져오기
    fetch('/animations/ai-worlflow.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('애니메이션 로드 실패:', error));
  }, []);

  return (
    <section
      className="relative bg-white text-deep py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* 배경 장식 요소 */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-brand/5 rounded-bl-full" />
      <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-olive/20 rounded-tr-full" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-none mb-8">
              <span className="block">AI 시대,</span>
              <span className="block">일의 흐름을</span>
              <span className="bg-gradient-to-r from-brand to-deep bg-clip-text text-transparent">다시 설계하다</span>
            </h1>
            <p className="font-square text-lg sm:text-xl text-gray-600 mb-10 font-bold max-w-md">
              위브앤은 실행을 통해 사람과 조직의 가능성을 실현합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/services" 
                className="px-8 py-3 bg-brand text-white font-semibold rounded-lg shadow-lg hover:bg-brand/90 transform hover:-translate-y-1 transition-all"
              >
                서비스 보기
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 border-2 border-deep text-deep font-semibold rounded-lg hover:bg-deep/5 transform hover:-translate-y-1 transition-all"
              >
                문의하기
              </a>
            </div>
          </div>
          
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="w-full max-w-lg">
              {animationData ? (
                <Lottie 
                  animationData={animationData} 
                  loop={true}
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                  애니메이션 로딩 중...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 