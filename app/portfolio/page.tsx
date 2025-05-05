'use client';

import { motion } from 'framer-motion';

const portfolios = [
  {
    title: '삼성전자 사내 AI 교육',
    summary: '사무직 대상 6시간 몰입형 실습. 업무 자동화 + GPT 커스터마이징 체험',
    image: '/images/portfolio/samsung.jpg',
  },
  {
    title: '대학 창업 아이디어 발굴 캠프',
    summary: 'ChatGPT 기반 아이디어 구상 → 실행 로드맵 설계. 1박 2일 집중 프로그램',
    image: '/images/portfolio/university.jpg',
  },
  {
    title: '공공기관 맞춤 GPT 코칭 도구 개발',
    summary: 'GPT 활용 진단 → 보고서 자동화 → 코칭봇 구축까지 일괄 수행',
    image: '/images/portfolio/public.jpg',
  },
];

export default function Portfolio() {
  return (
    <section className="min-h-screen bg-white text-deep px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          실행 사례와 기록
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolios.map((item, index) => (
            <motion.div
              key={index}
              className="bg-light rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 