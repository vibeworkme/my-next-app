'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-light">
        <Link href="/" className="text-2xl font-bold text-brand">
          WEAVE&
        </Link>
        <ul className="flex space-x-6 text-sm sm:text-base font-medium">
          <li><Link href="/about">회사 소개</Link></li>
          <li><Link href="/services">우리가 하는 일</Link></li>
          <li><Link href="/portfolio">성과와 사례</Link></li>
          <li><Link href="/people">사람들</Link></li>
          <li><Link href="/contact">문의하기</Link></li>
        </ul>
      </nav>
    </header>
  );
} 