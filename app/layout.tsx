import './globals.css'
import Navbar from './components/Navbar'
import { ReactNode } from 'react'
import { AuthProvider } from './contexts/AuthContext'

export const metadata = {
  title: 'WEAVE& – AI 시대의 교육 디자이너',
  description: '교육을 통해 새로운 비즈니스 기회를 설계합니다.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css"
          rel="stylesheet"
        />
        <link 
          href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css" 
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light text-deep font-sans">
        <AuthProvider>
          <Navbar />
          <main className="pt-24">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
} 