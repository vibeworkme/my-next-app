'use client'

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export default function Home() {
  const [animationData, setAnimationData] = useState(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
    
    // Lottie 애니메이션 데이터 가져오기
    fetch('/animations/ai-worlflow.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('애니메이션 로드 실패:', error));
  }, []);

  return (
    <section className="bg-white min-h-screen flex items-center px-8 sm:px-20 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* 왼쪽 텍스트 영역 */}
          <div className={`text-center sm:text-left transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-[#222]">
              <span className="block">AI 시대,</span>
              <span className="block mt-2">일의 흐름을</span>
              <span className="block mt-2">다시 설계하다</span>
            </h1>
            
            <p className="text-lg text-gray-600 mt-6 max-w-lg mx-auto sm:mx-0">
              위브앤은 실행을 통해 사람과 조직의 가능성을 실현합니다.
            </p>
            
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
              <a 
                href="/services" 
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                서비스 보기
              </a>
              <a 
                href="/contact" 
                className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                문의하기
              </a>
            </div>
          </div>
          
          {/* 오른쪽 이미지 영역 */}
          <div className={`mt-12 md:mt-0 transition-opacity duration-1000 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            {animationData ? (
              <Lottie 
                animationData={animationData} 
                loop={true}
                className="w-full max-w-[480px] mx-auto"
              />
            ) : (
              <div className="w-full h-80 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 