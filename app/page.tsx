export default function Home() {
  return (
    <main className="bg-light text-deep min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <h1 className="text-5xl sm:text-6xl font-bold text-brand text-center mb-6 leading-tight">
        감성을 설계하는<br />AI 교육·컨설팅 브랜드
      </h1>
      <p className="text-lg sm:text-xl text-deep/80 text-center max-w-2xl mb-8">
        위브앤은 기술과 사람, 학습과 실행 사이를 따뜻하게 연결합니다.<br />
        생성형 AI 시대, 우리는 함께 성장할 수 있는 배움의 길을 만듭니다.
      </p>
      <a
        href="/about"
        className="mt-4 px-6 py-3 bg-brand text-white rounded-xl shadow-md hover:bg-deep transition"
      >
        위브앤 이야기 보기
      </a>
    </main>
  );
} 