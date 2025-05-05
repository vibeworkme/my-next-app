'use client';

// Firebase 데이터베이스 유틸리티 함수
import { db } from './firebaseConfig';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp,
  DocumentData,
  QueryDocumentSnapshot 
} from 'firebase/firestore';

// 컬렉션의 모든 문서 가져오기
export const getCollection = async (collectionName: string) => {
  if (!db) {
    console.error('Firestore is not initialized');
    return [];
  }
  
  try {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching collection:', error);
    return [];
  }
};

// 컬렉션에 문서 추가하기
export const addDocument = async (collectionName: string, data: any) => {
  if (!db) {
    console.error('Firestore is not initialized');
    throw new Error('Firestore is not initialized');
  }
  
  const collectionRef = collection(db, collectionName);
  return await addDoc(collectionRef, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
};

// 특정 문서 가져오기
export const getDocument = async (collectionName: string, docId: string) => {
  if (!db) {
    console.error('Firestore is not initialized');
    return null;
  }
  
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data()
    };
  } else {
    return null;
  }
};

// 문서 업데이트하기
export const updateDocument = async (collectionName: string, docId: string, data: any) => {
  if (!db) {
    console.error('Firestore is not initialized');
    throw new Error('Firestore is not initialized');
  }
  
  const docRef = doc(db, collectionName, docId);
  return await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp()
  });
};

// 문서 삭제하기
export const deleteDocument = async (collectionName: string, docId: string) => {
  if (!db) {
    console.error('Firestore is not initialized');
    throw new Error('Firestore is not initialized');
  }
  
  const docRef = doc(db, collectionName, docId);
  return await deleteDoc(docRef);
};

// 쿼리로 문서 가져오기
export const queryDocuments = async (
  collectionName: string, 
  fieldPath: string, 
  operator: any, 
  value: any,
  sortField?: string,
  sortDirection?: 'asc' | 'desc',
  limitCount?: number
) => {
  if (!db) {
    console.error('Firestore is not initialized');
    return [];
  }
  
  try {
    let q = query(collection(db, collectionName), where(fieldPath, operator, value));
    
    if (sortField) {
      q = query(q, orderBy(sortField, sortDirection || 'asc'));
    }
    
    if (limitCount) {
      q = query(q, limit(limitCount));
    }
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error querying documents:', error);
    return [];
  }
}; 