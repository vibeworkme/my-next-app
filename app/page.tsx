'use client'

import Image from 'next/image';

export default function Home() {
  return (
    <section className="bg-white min-h-screen flex items-center px-8 sm:px-20 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* 왼쪽 텍스트 영역 */}
          <div className="text-center sm:text-left">
            <span className="text-[#5A4E4D] text-sm tracking-wider font-semibold uppercase">
              AI 시대,
            </span>
            
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-[#222] mt-4">
              <span className="block">일의 흐름을</span>
              <span className="block mt-1">다시 설계하다</span>
            </h1>
            
            <p className="text-lg text-gray-600 mt-6 max-w-lg mx-auto sm:mx-0">
              위브앤은 실행을 통해 사람과 조직의 가능성을 실현합니다.
            </p>
            
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
              <a 
                href="/services" 
                className="bg-[#A47C6F] text-white px-6 py-3 rounded-xl hover:bg-[#8C635A] transition-colors"
              >
                서비스 보기
              </a>
              <a 
                href="/contact" 
                className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                문의하기
              </a>
            </div>
          </div>
          
          {/* 오른쪽 이미지 영역 */}
          <div className="mt-12 md:mt-0">
            <Image
              src="/hero-illustration.svg"
              alt="AI 시대의 업무 흐름 설계"
              width={480}
              height={480}
              className="max-w-[480px] w-full mx-auto sm:mx-0 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 