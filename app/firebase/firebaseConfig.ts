// Firebase 구성 파일
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase 설정 - Firebase 콘솔에서 확인한 값을 입력해야 합니다
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Firebase 앱 초기화 (중복 초기화 방지)
let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Firestore 인스턴스 생성
const db = getFirestore(firebaseApp);
// Auth 인스턴스 생성
const auth = getAuth(firebaseApp);
// Storage 인스턴스 생성
const storage = getStorage(firebaseApp);

export { db, auth, storage }; 