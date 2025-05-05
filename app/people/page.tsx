'use client';

// import { motion } from 'framer-motion'; // 주석 처리

const people = [
  {
    name: '박희용',
    role: '대표 / 교육·전략 기획자',
    bio: '기획을 통해 교육과 비즈니스의 흐름을 설계하는 사람. 창업 교육, AI 기반 콘텐츠 실습, 공공기관 컨설팅 등 다양한 현장을 누비며 실전 중심의 교육을 만들어갑니다.',
    image: '/images/people/park.jpg',
  },
  {
    name: 'AI 파트너들',
    role: '실행 지원 에이전트',
    bio: 'ChatGPT, Cursor, Notion AI 등 다양한 AI 파트너들과 협업합니다. 반복적인 업무는 AI에게, 판단과 기획은 사람에게.',
    image: '/images/people/ai.jpg',
  },
];

export default function People() {
  return (
    <section className="min-h-screen bg-white text-deep px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 // motion. 제거
          className="text-4xl font-bold text-center mb-16"
          // initial, animate, transition 속성 제거
        >
          함께 일하는 사람들
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {people.map((person, index) => (
            <div // motion. 제거
              key={index}
              className="flex flex-col items-center text-center bg-light p-6 rounded-xl shadow-md hover:shadow-xl transition"
              // initial, whileInView, viewport, transition 속성 제거
            >
              {/* <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-brand"
              /> */}
              {/* 임시 Placeholder */}
              <div className="w-32 h-32 rounded-full bg-brand/30 flex items-center justify-center text-deep/50 mb-4 border-4 border-brand">
                 Img
              </div>
              <h3 className="text-xl font-semibold text-brand mb-1">{person.name}</h3>
              <p className="text-sm text-olive font-medium mb-2">{person.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 