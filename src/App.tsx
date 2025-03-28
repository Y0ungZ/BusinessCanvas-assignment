import '@ant-design/v5-patch-for-react-19';
import UserList from './pages/UserList';
import { useState } from 'react';
import ValidateFormModal from './components/ValidateFormModal';
import RecordForm from './components/RecordForm';
import { UserDataType } from './types/record';
import { useModal } from './contexts/ModalProvider';
import { useValidate } from './contexts/ValidateProvider';

function App() {
  const { closeModal } = useModal();
  const { validate, invalidate } = useValidate();
  const [data, setData] = useState<UserDataType | null>(null);

  const onSave = () => {
    if (data) {
      console.log(data);
    }
    closeModal();
  };

  const handleFormDataChange = (data: UserDataType) => {
    if (data.이름 && data.가입일) {
      validate();
    } else {
      invalidate();
    }
    setData(data);
  };

  return (
    <div>
      <UserList />
      <ValidateFormModal title="회원 추가" onSave={onSave}>
        <RecordForm handleFormDataChange={handleFormDataChange} />
      </ValidateFormModal>
    </div>
  );
}

export default App;
