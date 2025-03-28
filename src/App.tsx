import '@ant-design/v5-patch-for-react-19';
import UserList from './pages/UserList';
import ValidateFormModal from './components/ValidateFormModal';
import RecordForm from './components/RecordForm';
import { useModal } from './contexts/ModalProvider';
import { useFormState } from './contexts/FormStateProvider';
import { useStorage } from './contexts/StorageProvider';

const App = () => {
  const { createRecord, updateRecord } = useStorage();
  const { closeModal, key, record } = useModal();
  const { form, onSave } = useFormState();

  const handleSave = () => {
    if (key === 'create') {
      createRecord(form.getFieldsValue());
    }
    if (key === 'update' && record) {
      updateRecord(record.id, form.getFieldsValue());
    }
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
};

export default App;
