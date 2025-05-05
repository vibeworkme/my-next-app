export default function Home() {
  return (
    <main className="min-h-screen bg-light flex items-center justify-center px-8 py-24">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* 왼쪽 텍스트 영역 */}
        <div className="space-y-6">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight font-black tracking-tighter text-deep">
            우리는<br />
            <span className="text-brand">‘일의 본질’을 다시 설계</span>합니다.
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            AI 시대, 사람과 조직의 흐름을 다시 설계하는<br />
            교육 기반 전략 컨설팅 브랜드, <strong>위브앤</strong>
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/about"
              className="px-6 py-3 bg-brand text-white rounded-full font-semibold shadow-md hover:scale-105 transition"
            >
              위브앤 이야기 보기
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border-2 border-brand text-brand rounded-full font-semibold hover:bg-brand hover:text-white transition"
            >
              상담 신청하기
            </a>
          </div>
        </div>

        {/* 오른쪽 비주얼 영역 (나중에 Lottie나 일러스트 삽입) */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-[80%] h-[80%] bg-gradient-to-tr from-olive to-brand/40 rounded-3xl shadow-xl animate-pulse" />
        </div>

      </div>
    </main>
  );
} 