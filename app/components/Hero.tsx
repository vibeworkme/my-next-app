'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative bg-white py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* 텍스트 영역 - 좌측 */}
          <div 
            className={`transition-opacity duration-1000 ease-in-out ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="font-normal text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-gray-900 mb-10">
              <span className="block mb-2">AI 시대,</span>
              <span className="block mb-2">일의 흐름을</span>
              <span className="block">다시 설계하다</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-md">
              위브앤은 실행을 통해 사람과 조직의 가능성을 실현합니다.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/services" 
                className="px-8 py-3 bg-[#A47C6F] text-white font-medium rounded-lg hover:bg-[#8C635A] transition-colors duration-300"
              >
                서비스 보기
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 border border-[#A47C6F] text-[#A47C6F] font-medium rounded-lg hover:bg-[#A47C6F]/5 transition-colors duration-300"
              >
                문의하기
              </a>
            </div>
          </div>
          
          {/* 우측 영역 - 정갈한 빈 공간 또는 단정한 일러스트 */}
          <div 
            className={`transition-opacity duration-1000 ease-in-out delay-300 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-[#A47C6F]/5 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-[#A47C6F]/10"></div>
                </div>
              </div>
              <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[#A47C6F]/20"></div>
              <div className="absolute bottom-1/3 left-1/4 w-10 h-10 rounded-full bg-[#A47C6F]/15"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 