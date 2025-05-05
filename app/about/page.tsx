'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen bg-white text-deep px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* 위브앤 소개 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl font-bold">우리가 존재하는 이유</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            위브앤은 AI 시대, 사람과 조직이 <strong>흐름에 적응하도록 돕는 교육 디자이너</strong>입니다.  
            우리는 단순한 기술 전달이 아닌, <strong>일의 본질을 새롭게 바라보는 질문</strong>에서 시작합니다.
          </p>
        </motion.div>

        {/* 일하는 방식 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-brand">우리가 일하는 방식</h3>
          <ul className="list-disc list-inside text-gray-700 leading-loose text-base">
            <li><strong>흐름 중심 설계:</strong> 도구보다 흐름을 먼저 설계합니다.</li>
            <li><strong>Learning by Doing:</strong> 실습과 실행 중심의 몰입형 교육을 운영합니다.</li>
            <li><strong>맞춤형 파트너십:</strong> 조직의 맥락에 맞춰 커스터마이징합니다.</li>
            <li><strong>지속 가능한 변화:</strong> 교육 이후에도 흐름이 유지되도록 설계합니다.</li>
          </ul>
        </motion.div>

        {/* 브랜드 슬로건 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="bg-light rounded-xl p-6 shadow-md"
        >
          <p className="text-xl text-center font-medium leading-relaxed">
            <span className="block text-brand font-semibold text-2xl mb-2">“교육을 통해 새로운 비즈니스 기회를 설계하는”</span>
            위브앤은 그렇게 <strong>생각하고, 일하고, 사람과 연결</strong>됩니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 