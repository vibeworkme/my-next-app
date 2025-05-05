'use client';

// Firebase 구성 파일
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { getStorage, FirebaseStorage } from "firebase/storage";

// 초기화된 Firebase 앱, Firestore, Auth, Storage 변수 선언
let firebaseApp: FirebaseApp | undefined;
let db: Firestore | null = null;
let auth: Auth | null = null;
let storage: FirebaseStorage | null = null;

// 클라이언트 측에서만 실행 - 빌드 시 이 코드가 실행되지 않도록 함
if (typeof window !== 'undefined') {
  try {
    // Firebase 설정 - 환경 변수가 없을 경우 안전한 기본값 사용
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "dummy-api-key-for-development",
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "dummy-project.firebaseapp.com",
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "dummy-project",
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "dummy-project.appspot.com",
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:000000000000:web:0000000000000000000000"
    };

    // 브라우저 환경에서만 Firebase 초기화
    if (getApps().length === 0) {
      firebaseApp = initializeApp(firebaseConfig);
      if (firebaseApp) {
        db = getFirestore(firebaseApp);
        auth = getAuth(firebaseApp);
        storage = getStorage(firebaseApp);
      }
    } else {
      firebaseApp = getApps()[0];
      db = getFirestore(firebaseApp);
      auth = getAuth(firebaseApp);
      storage = getStorage(firebaseApp);
    }
  } catch (error) {
    console.error("Firebase 초기화 오류:", error);
  }
}

export { db, auth, storage }; 