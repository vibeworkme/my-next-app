'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  // 텍스트 애니메이션 효과를 위한 상태
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="block">AI 시대,</span>
              <span className="block">일의 흐름을</span>
              <span className="bg-gradient-to-r from-brand to-deep bg-clip-text text-transparent">다시 설계하다</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 font-medium max-w-md">
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
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/globe.svg"
                  alt="글로벌 네트워크"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24">
                <Image
                  src="/window.svg"
                  alt="윈도우"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain animate-pulse"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24">
                <Image
                  src="/file.svg"
                  alt="파일"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain animate-bounce"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 