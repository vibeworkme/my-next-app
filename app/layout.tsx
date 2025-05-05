import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: '위브앤',
  description: 'AI 시대, 교육과 컨설팅의 새로운 흐름',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-light text-deep">{children}</body>
    </html>
  )
} 