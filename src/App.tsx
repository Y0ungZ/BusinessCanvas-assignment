import '@ant-design/v5-patch-for-react-19';
import UserList from './pages/UserList';
import ValidateFormModal from './components/ValidateFormModal';
import RecordForm from './components/RecordForm';
import { useModal } from './contexts/ModalProvider';
import { useFormState } from './contexts/FormStateProvider';

function App() {
  const { closeModal } = useModal();
  const { onSave } = useFormState();

  const handleSave = () => {
    onSave();
    closeModal();
  };

  return (
    <div>
      <UserList />
      <ValidateFormModal title="회원 추가" onSave={handleSave}>
        <RecordForm />
      </ValidateFormModal>
    </div>
  );
}

export default App;
