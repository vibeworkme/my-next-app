export default function Home() {
  return (
    <section className="min-h-screen bg-light flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-deep mb-4">
        AI 시대, 일의 본질을 재설계하는 파트너
      </h1>
      <p className="text-lg md:text-xl text-brand mb-6 max-w-xl">
        위브앤은 도구를 넘어서, 사람과 흐름을 설계합니다.
      </p>
      <div className="flex gap-4">
        <a href="/about" className="bg-brand text-white px-6 py-3 rounded-2xl shadow hover:bg-deep transition">
          회사 소개 보기
        </a>
        <a href="/contact" className="border border-brand text-brand px-6 py-3 rounded-2xl hover:bg-brand hover:text-white transition">
          문의하기
        </a>
      </div>
    </section>
  );
} 