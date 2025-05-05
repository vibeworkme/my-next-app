'use client';

import { useState, useRef, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { db, storage } from '../../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Link from 'next/link';

export default function UploadMaterialPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  
  // 카테고리 목록
  const categories = ['초급', '중급', '고급', '특강', '워크샵'];

  // 인증 확인
  if (!loading && !user) {
    router.push('/');
    return null;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // 유효성 검사
    if (!title.trim()) {
      setError('제목을 입력해주세요.');
      return;
    }

    if (!category) {
      setError('카테고리를 선택해주세요.');
      return;
    }

    if (!file) {
      setError('파일을 선택해주세요.');
      return;
    }

    if (!user || !storage || !db) {
      setError('인증 또는 스토리지 서비스에 문제가 발생했습니다.');
      return;
    }

    try {
      setIsUploading(true);

      // 파일 경로 및 메타데이터 설정
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `materials/${user.uid}/${fileName}`;
      const storageRef = ref(storage, filePath);

      // 파일 업로드
      const uploadTask = uploadBytesResumable(storageRef, file);

      // 업로드 진행 상황 모니터링
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Upload error:', error);
          setError('파일 업로드 중 오류가 발생했습니다.');
          setIsUploading(false);
        },
        async () => {
          // 업로드 완료 후 다운로드 URL 가져오기
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Firestore에 자료 정보 저장
          await addDoc(collection(db, 'materials'), {
            title,
            description,
            category,
            fileUrl: downloadURL,
            fileName: file.name,
            fileSize: file.size,
            filePath: filePath,
            uploadedBy: user.uid,
            uploadedAt: serverTimestamp(),
          });

          // 업로드 완료 후 자료실 페이지로 이동
          router.push('/materials');
        }
      );
    } catch (error) {
      console.error('Error uploading material:', error);
      setError('자료 업로드 중 오류가 발생했습니다.');
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">교안 자료 업로드</h1>
        <Link
          href="/materials"
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          목록으로 돌아가기
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            제목 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="교안 제목을 입력하세요"
            disabled={isUploading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            카테고리 <span className="text-red-500">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled={isUploading}
          >
            <option value="">카테고리 선택</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            설명
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="교안에 대한 설명을 입력하세요"
            rows={4}
            disabled={isUploading}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            파일 <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              disabled={isUploading}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition"
              disabled={isUploading}
            >
              파일 선택
            </button>
            <span className="ml-3 text-sm text-gray-600">
              {file ? file.name : '선택된 파일 없음'}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            PDF, PPT, PPTX, DOC, DOCX, ZIP 등의 파일을 업로드할 수 있습니다.
          </p>
        </div>

        {isUploading && (
          <div className="mb-6">
            <div className="bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-[#A47C6F] h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 text-center">
              {uploadProgress}% 업로드 중...
            </p>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isUploading}
            className="bg-[#A47C6F] hover:bg-[#8C635A] text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition"
          >
            {isUploading ? '업로드 중...' : '업로드'}
          </button>
        </div>
      </form>
    </div>
  );
} 