'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase/firebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import Link from 'next/link';

// 교안 자료 타입 정의
interface Material {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  uploadedBy: string;
  uploadedAt: any;
  category: string;
}

export default function MaterialsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('전체');

  // 카테고리 목록
  const categories = ['전체', '초급', '중급', '고급', '특강', '워크샵'];

  // 인증 확인 및 교안 자료 가져오기
  useEffect(() => {
    // 비로그인 사용자는 홈으로 리디렉션
    if (!loading && !user) {
      router.push('/');
      return;
    }

    if (!db || !user) return;

    setIsLoading(true);

    // Firestore에서 교안 자료 가져오기
    const q = query(
      collection(db, 'materials'),
      orderBy('uploadedAt', 'desc')
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const materialsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Material[];

        setMaterials(materialsData);
        setIsLoading(false);
      },
      (error) => {
        console.error('Error fetching materials:', error);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user, loading, router]);

  // 선택된 카테고리에 따라 필터링된 자료 목록
  const filteredMaterials = activeCategory === '전체'
    ? materials
    : materials.filter(material => material.category === activeCategory);

  // 파일 크기를 읽기 쉬운 형식으로 변환
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  // 날짜 형식 변환
  const formatDate = (timestamp: any) => {
    if (!timestamp) return '-';
    const date = timestamp.toDate();
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#A47C6F]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">교안 자료실</h1>
        <Link
          href="/materials/upload"
          className="px-4 py-2 bg-[#A47C6F] text-white rounded hover:bg-[#8C635A] transition"
        >
          교안 업로드
        </Link>
      </div>

      {/* 카테고리 필터 */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === category
                  ? 'bg-[#A47C6F] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 자료 목록 */}
      {filteredMaterials.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <p className="text-gray-500">등록된 교안 자료가 없습니다.</p>
          {activeCategory !== '전체' && (
            <p className="text-sm text-gray-400 mt-2">다른 카테고리를 선택해 보세요.</p>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">카테고리</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">파일</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">업로드 날짜</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">다운로드</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredMaterials.map((material) => (
                <tr key={material.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="text-sm font-medium text-gray-900">{material.title}</div>
                    <div className="text-xs text-gray-500">{material.description}</div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-500">{material.category}</td>
                  <td className="py-4 px-4">
                    <div className="text-sm text-gray-900">{material.fileName}</div>
                    <div className="text-xs text-gray-500">{formatFileSize(material.fileSize)}</div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-500">{formatDate(material.uploadedAt)}</td>
                  <td className="py-4 px-4">
                    <a
                      href={material.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A47C6F] hover:text-[#8C635A] font-medium"
                    >
                      다운로드
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 