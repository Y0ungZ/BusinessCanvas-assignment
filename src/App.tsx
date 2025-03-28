import '@ant-design/v5-patch-for-react-19';
import UserList from './pages/UserList';
import { useState } from 'react';
import ValidateFormModal from './components/ValidateFormModal';
import RecordForm from './components/RecordForm';
import { UserDataType } from './types/record';
import { useModal } from './contexts/ModalProvider';

function App() {
  const { closeModal } = useModal();
  const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState<UserDataType | null>(null);

  const onSave = () => {
    if (data) {
      console.log(data);
    }
    closeModal();
  };

  const handleFormDataChange = (data: UserDataType) => {
    if (data.이름 && data.가입일) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setData(data);
  };

  return (
    <div>
      <UserList />
      <ValidateFormModal title="회원 추가" isValid={isValid} onSave={onSave}>
        <RecordForm
          setIsValid={setIsValid}
          handleFormDataChange={handleFormDataChange}
        />
      </ValidateFormModal>
    </div>
  );
}

export default App;
