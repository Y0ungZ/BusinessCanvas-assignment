import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
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

const StorageContext = createContext<StorageState<UserDataType> | undefined>(
  undefined,
);

const StorageProvider = ({ children }: PropsWithChildren) => {
  const type: StorageType = import.meta.env.VITE_STORAGE || 'in-memory';
  const STORAGE_KEY = 'USERS';
  const [records, setRecords] = useState<UserDataType[]>(() => {
    if (type === 'in-memory') {
      return [...INITIAL_USER_RECORDS];
    }
    if (type === 'local-storage') {
      if (localStorage.getItem(STORAGE_KEY) === null) {
        return [...INITIAL_USER_RECORDS];
      }
    }
    return [];
  });

  useEffect(() => {
    if (type === 'local-storage') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    }
  }, [records, type]);

  const createRecord = (record: UserDataType) => {
    const day = dayjs(record.가입일).format('YYYY-MM-DD');
    const newRecord = {
      ...record,
      id: nanoid(),
      가입일: day,
    };
    setRecords(prev => [...prev, newRecord]);
  };

  const updateRecord = (id: string, newRecord: UserDataType) => {
    const day = dayjs(newRecord.가입일).format('YYYY-MM-DD');
    const updateRecord = { ...newRecord, 가입일: day };
    console.log(updateRecord);
    setRecords(prev =>
      prev.map(record => (record.id === id ? updateRecord : record)),
    );
  };

  const deleteRecord = (id: string) => {
    setRecords(prev => prev.filter(record => record.id !== id));
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
