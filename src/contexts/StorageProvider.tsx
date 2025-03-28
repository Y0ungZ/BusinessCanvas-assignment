import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { StorageType } from '../vite-env';
import { UserDataType } from '../types/record';
import { INITIAL_USER_RECORDS } from '../types/constants';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

interface StorageState<T> {
  createRecord: (record: T) => void;
  records: T[];
  updateRecord: (id: string, newRecord: T) => void;
  deleteRecord: (id: string) => void;
  rowValueSet: (field: keyof T) => string[];
}

const StorageContext = createContext<StorageState<UserDataType> | null>(null);

const StorageProvider = ({ children }: PropsWithChildren) => {
  const type: StorageType = import.meta.env.VITE_STORAGE || 'in-memory';
  const STORAGE_KEY = 'USERS';

  const getLocalStorage = () => {
    return localStorage.getItem(STORAGE_KEY);
  };

  const setLocalStorage = (records: UserDataType[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  };

  const [records, setRecords] = useState<UserDataType[]>(() => {
    if (type === 'in-memory') {
      return [...INITIAL_USER_RECORDS];
    }
    if (type === 'local-storage') {
      const localRecords = getLocalStorage();
      if (localRecords === null) {
        return [...INITIAL_USER_RECORDS];
      } else {
        return JSON.parse(localRecords);
      }
    }
    return [];
  });

  const createRecord = (record: UserDataType) => {
    const normalizedRecord = Object.fromEntries(
      Object.entries(record).map(([key, value]) => [
        key,
        value === undefined ? null : value,
      ]),
    );

    const day = dayjs(record.가입일).format('YYYY-MM-DD');
    const newRecord: UserDataType = {
      ...normalizedRecord,
      id: nanoid(),
      이름: record.이름,
      가입일: day,
      '이메일 수신 동의': Boolean(record['이메일 수신 동의']),
    };

    setRecords(prev => {
      const createRecords = [...prev, newRecord];
      if (type === 'local-storage') {
        setLocalStorage(createRecords);
      }
      return createRecords;
    });
  };

  const updateRecord = (id: string, record: UserDataType) => {
    const normalizedRecord = Object.fromEntries(
      Object.entries(record).map(([key, value]) => [
        key,
        value === undefined ? null : value,
      ]),
    );

    const day = dayjs(record.가입일).format('YYYY-MM-DD');

    const newRecord: UserDataType = {
      ...normalizedRecord,
      id: id,
      이름: record.이름,
      가입일: day,
      '이메일 수신 동의': Boolean(record['이메일 수신 동의']),
    };

    setRecords(prev => {
      const updateRecords = prev.map(record =>
        record.id === id ? newRecord : record,
      );
      if (type === 'local-storage') {
        setLocalStorage(updateRecords);
      }
      return updateRecords;
    });
  };

  const deleteRecord = (id: string) => {
    setRecords(prev => {
      const deleteRecords = prev.filter(record => record.id !== id);
      if (type === 'local-storage') {
        setLocalStorage(deleteRecords);
      }
      return deleteRecords;
    });
  };

  const rowValueSet = (field: keyof UserDataType) => {
    return Array.from(new Set(records.map(record => record[field] as string)));
  };

  const value = {
    createRecord,
    records,
    updateRecord,
    deleteRecord,
    rowValueSet,
  };
  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
};

export const useStorage = () => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error('useStorage must be used within a StorageProvider');
  }
  return context;
};

export default StorageProvider;
