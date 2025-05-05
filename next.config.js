/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // 프로덕션 빌드 시 ESLint 검사 건너뛰기 (선택사항)
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // 서버에서 실행될 때는 Firebase SDK를 비워 처리 (빌드 오류 방지)
    if (isServer) {
      Object.assign(config.resolve.alias, {
        'firebase/app': 'next/dist/lib/empty.js',
        'firebase/auth': 'next/dist/lib/empty.js',
        'firebase/firestore': 'next/dist/lib/empty.js',
        'firebase/storage': 'next/dist/lib/empty.js',
        'firebase/analytics': 'next/dist/lib/empty.js',
        'firebase/functions': 'next/dist/lib/empty.js',
        'firebase/database': 'next/dist/lib/empty.js'
      });
    }
    return config;
  },
  // 환경 변수 기본값 설정 (Firebase 없이도 빌드 가능하도록)
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'dummy-key',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'dummy-project'
  }
}

module.exports = nextConfig; 