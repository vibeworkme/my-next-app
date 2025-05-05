'use client';

import { useState, useEffect } from 'react';
import { getCollection, addDocument } from '../firebase/utils';

interface Item {
  id: string;
  name: string;
  description?: string;
  createdAt?: any;
}

export default function FirebaseDemo() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newItemName, setNewItemName] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');

  // 데이터 가져오기
  const fetchItems = async () => {
    try {
      setLoading(true);
      const itemsData = await getCollection('items');
      setItems(itemsData as Item[]);
      setError(null);
    } catch (err) {
      console.error('Error fetching items:', err);
      setError('데이터를 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    fetchItems();
  }, []);

  // 새 아이템 추가
  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newItemName.trim()) {
      setError('아이템 이름을 입력해주세요.');
      return;
    }
    
    try {
      setLoading(true);
      await addDocument('items', {
        name: newItemName,
        description: newItemDescription || '',
      });
      
      // 입력 필드 초기화
      setNewItemName('');
      setNewItemDescription('');
      
      // 새로운 데이터로 리스트 갱신
      await fetchItems();
      setError(null);
    } catch (err) {
      console.error('Error adding item:', err);
      setError('아이템 추가에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#A47C6F]">Firebase Firestore 데모</h2>
      
      {/* 에러 메시지 */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {/* 아이템 추가 폼 */}
      <form onSubmit={handleAddItem} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            이름
          </label>
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="아이템 이름"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            설명
          </label>
          <textarea
            value={newItemDescription}
            onChange={(e) => setNewItemDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="아이템 설명 (선택사항)"
            rows={3}
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="bg-[#A47C6F] hover:bg-[#8C635A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors w-full"
        >
          {loading ? '처리 중...' : '아이템 추가'}
        </button>
      </form>
      
      {/* 아이템 목록 */}
      <div>
        <h3 className="text-xl font-semibold mb-4">아이템 목록</h3>
        
        {loading && <p className="text-gray-500">로딩 중...</p>}
        
        {!loading && items.length === 0 && (
          <p className="text-gray-500">아직 등록된 아이템이 없습니다.</p>
        )}
        
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="border-b pb-2">
              <h4 className="font-medium">{item.name}</h4>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <p className="text-xs text-gray-400 mt-1">
                {item.createdAt?.toDate().toLocaleString() || '방금 전'}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 