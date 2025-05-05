'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './auth/AuthModal';

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-light">
        <Link href="/" className="text-2xl font-bold text-brand">
          WEAVE&
        </Link>
        <ul className="hidden md:flex space-x-6 text-sm sm:text-base font-medium">
          <li><Link href="/about">회사 소개</Link></li>
          <li><Link href="/services">우리가 하는 일</Link></li>
          <li><Link href="/portfolio">성과와 사례</Link></li>
          <li><Link href="/people">사람들</Link></li>
          {user && (
            <li><Link href="/materials" className="text-[#A47C6F]">교안 자료실</Link></li>
          )}
          <li><Link href="/contact">문의하기</Link></li>
        </ul>
        
        <div className="flex items-center space-x-4">
          {!loading && (
            user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm hidden sm:inline">{user.email}</span>
                <button 
                  onClick={logout}
                  className="px-4 py-2 border border-gray-300 text-white rounded hover:bg-gray-700 transition"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="px-4 py-2 bg-[#A47C6F] text-white rounded hover:bg-[#8C635A] transition"
              >
                로그인
              </button>
            )
          )}
          
          {/* 모바일 메뉴 버튼 (나중에 구현) */}
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* 인증 모달 */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
} 