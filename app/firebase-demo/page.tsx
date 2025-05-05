'use client';

import FirebaseDemo from '../components/FirebaseDemo';

export default function FirebaseDemoPage() {
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