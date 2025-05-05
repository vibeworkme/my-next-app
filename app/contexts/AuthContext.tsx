'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';

// 인증 컨텍스트의 타입 정의
type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
};

// 기본값으로 초기화된 컨텍스트 생성
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: async () => {},
});

// AuthContext를 사용하기 위한 훅
export const useAuth = () => useContext(AuthContext);

// AuthContext 프로바이더 컴포넌트
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Firebase 인증 상태 변경 감지
  useEffect(() => {
    if (!auth) return;
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 로그아웃 함수
  const logout = async () => {
    if (!auth) return;
    
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error('로그아웃 오류:', error);
    } finally {
      setLoading(false);
    }
  };

  // 컨텍스트 값 제공
  const value = {
    user,
    loading,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
} 