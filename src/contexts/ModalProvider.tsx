import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { UserDataType } from '../types/record';

export type ModalType = 'create' | 'update';
interface ModalState {
  isModalOpen: boolean;
  openModal: (type: ModalType, record?: UserDataType) => void;
  closeModal: () => void;
  record: UserDataType | null;
  key: ModalType;
}

const ModalContext = createContext<ModalState | null>(null);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [key, setKey] = useState<ModalType>('create');
  const [record, setRecord] = useState<UserDataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (type: ModalType, record?: UserDataType) => {
    setKey(type);
    if (record) {
      setRecord(record);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const value = {
    isModalOpen,
    openModal,
    closeModal,
    key,
    record,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export default ModalProvider;
