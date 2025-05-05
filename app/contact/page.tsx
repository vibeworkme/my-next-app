'use client';

// import { motion } from 'framer-motion'; // 주석 처리

export default function Contact() {
  return (
    <section className="min-h-screen bg-light text-deep px-6 py-24">
      <div className="max-w-xl mx-auto">
        <h2 // motion. 제거
          className="text-4xl font-bold text-center mb-6"
          // initial, animate, transition 속성 제거
        >
          편지를 보내주세요
        </h2>
        <p // motion. 제거
          className="text-center text-gray-700 mb-12 text-base"
          // initial, animate, transition 속성 제거
        >
          위브앤과 함께할 수 있는 이야기가 있다면<br />
          부담 없이 남겨주세요. 정성껏 답장드릴게요.
        </p>

        <form // motion. 제거
          className="space-y-6"
          // initial, animate, transition 속성 제거
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              이름
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="홍길동"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              메시지
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="어떤 이야기를 나누고 싶으신가요?"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand text-white py-3 rounded-md font-semibold hover:bg-deep transition"
          >
            보내기
          </button>
        </form>
      </div>
    </section>
  );
} 