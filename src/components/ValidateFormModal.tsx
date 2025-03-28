import { Modal as AntdModal } from 'antd';
import { useModal } from '../contexts/ModalProvider';
import { PropsWithChildren } from 'react';
import Button from './Button';
import { CloseOutlined } from '@ant-design/icons';

interface ValidateModalProps extends PropsWithChildren {
  title: string;
  isValid: boolean;
  onSave: () => void;
}

const ModalHeader = ({
  title,
  onCancel,
}: {
  title: string;
  onCancel: () => void;
}) => {
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        padding: '0.75rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.625rem',
      }}
    >
      <span className="typo--bold">{title}</span>
      <Button content="iconOnly" icon={<CloseOutlined />} onClick={onCancel} />
    </div>
  );
};

const ModalContent = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const ModalFooter = ({
  onCancel,
  isValid,
  onSave,
}: {
  onCancel: () => void;
  isValid: boolean;
  onSave: () => void;
}) => (
  <div
    style={{
      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      backgroundColor: 'rgba(0,0,0,0.02)',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0.75rem 1rem',
      gap: '0.5rem',
    }}
  >
    <Button onClick={onCancel}>취소</Button>
    <Button onClick={onSave} disabled={!isValid} type="primary">
      저장
    </Button>
  </div>
);

const ValidateFormModal = ({
  title,
  isValid,
  onSave,
  children,
}: ValidateModalProps) => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <AntdModal
      open={isModalOpen}
      centered
      closeIcon={null}
      title={null}
      footer={null}
    >
      <ModalHeader title={title} onCancel={closeModal} />
      <ModalContent>{children}</ModalContent>
      <ModalFooter onCancel={closeModal} isValid={isValid} onSave={onSave} />
    </AntdModal>
  );
};

export default ValidateFormModal;
