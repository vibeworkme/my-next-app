'use client';

// import { motion } from 'framer-motion'; // 주석 처리

const services = [
  {
    title: 'VIBE WORK',
    description:
      '생성형 AI를 단순 도구가 아닌, 일의 흐름 안에 녹여내는 몰입형 교육',
    keywords: ['AI 협업법', '실행 중심', '체험형 학습'],
  },
  {
    title: 'AIXEED',
    description:
      'AI를 활용해 아이디어의 씨앗을 심고, 비즈니스로 구체화하는 전략 설계',
    keywords: ['아이디어 발굴', 'GPT 기반 기획', '프롬프트 훈련'],
  },
  {
    title: '맞춤형 GPT 구축',
    description:
      '조직 업무에 최적화된 GPT 설계 및 워크플로우 자동화를 지원합니다',
    keywords: ['GPT 커스터마이징', '자동화 설계', 'Google 기반 연동'],
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-white text-deep px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 // motion. 제거
          className="text-4xl font-bold text-center mb-16"
          // initial, animate, transition 속성 제거
        >
          우리가 하는 일
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div // motion. 제거
              key={index}
              className="bg-light p-6 rounded-xl shadow-md hover:shadow-xl transition"
              // initial, whileInView, viewport, transition 속성 제거
            >
              <h3 className="text-xl font-semibold text-brand mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="text-sm text-olive list-disc list-inside space-y-1">
                {service.keywords.map((keyword, i) => (
                  <li key={i}>{keyword}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 