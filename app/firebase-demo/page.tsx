'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// 배포 환경에서는 Firebase 데모 비활성화
export default function FirebaseDemoPage() {
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    // 개발 환경인지 프로덕션 환경인지 확인
    setIsProduction(process.env.NODE_ENV === 'production');
  }, []);

  if (isProduction) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">Firebase 데모</h1>
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-6 rounded-lg">
            <p className="mb-4">
              프로덕션 환경에서는 Firebase 데모가 비활성화되어 있습니다.
            </p>
            <Link href="/" className="text-[#A47C6F] hover:underline">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 개발 환경에서는 동적으로 FirebaseDemo 컴포넌트 로드
  const FirebaseDemo = require('../components/FirebaseDemo').default;

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Firebase 데이터베이스 데모</h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          이 페이지는 Firebase Firestore 데이터베이스와의 연동을 보여주는 데모입니다.
          아래 양식을 사용하여 데이터를 추가하고 목록을 확인해보세요.
        </p>
        
        <FirebaseDemo />
      </div>
    </div>
  );
} 