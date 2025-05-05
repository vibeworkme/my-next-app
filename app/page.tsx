'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-8 py-24 bg-gradient-to-br from-light to-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* 왼쪽 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            우리는 <br />
            <span className="text-brand">‘일의 본질’을 다시 설계</span>합니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            AI 시대, 사람과 조직의 흐름을 다시 설계하는<br />
            교육 기반 전략 컨설팅 브랜드, <strong>위브앤</strong>
          </p>
          <div className="flex gap-4 mt-6">
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-brand text-white rounded-full font-semibold shadow hover:bg-deep transition"
            >
              위브앤 이야기 보기
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border-2 border-brand text-brand rounded-full font-semibold hover:bg-brand hover:text-white transition"
            >
              상담 신청하기
            </motion.a>
          </div>
        </motion.div>

        {/* 오른쪽 비주얼 영역 (임시) */}
        <motion.div
          className="hidden md:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[80%] h-[80%] bg-gradient-to-tr from-olive to-brand/40 rounded-3xl shadow-xl animate-pulse" />
        </motion.div>

      </div>
    </main>
  )
} 