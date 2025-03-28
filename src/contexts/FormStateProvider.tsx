import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { FormInstance, useForm } from 'antd/es/form/Form';
import { UserDataType } from '../types/record';

interface FormState<T> {
  form: FormInstance<T>;
  isValid: boolean;
  validate: () => void;
  invalidate: () => void;
  onSave: () => void;
  handleValueChange: () => void;
}

const FormStateContext = createContext<FormState<UserDataType> | undefined>(
  undefined,
);

const FormStateProvider = ({ children }: PropsWithChildren) => {
  const [form] = useForm<UserDataType>();
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    setIsValid(true);
  };

  const invalidate = () => {
    setIsValid(false);
  };

  const onSave = () => {
    resetForm();
  };

  const resetForm = () => {
    form.resetFields();
    setIsValid(false);
  };

  const handleValueChange = () => {
    const values = form.getFieldsValue();

    if (values.이름 && values.가입일) {
      validate();
    } else {
      invalidate();
    }
  };

  const value = {
    form,
    isValid,
    validate,
    invalidate,
    onSave,
    handleValueChange,
  };

  return (
    <FormStateContext.Provider value={value}>
      {children}
    </FormStateContext.Provider>
  );
};

export const useFormState = () => {
  const context = useContext(FormStateContext);
  if (!context) {
    throw new Error('useFormState must be used within a FormStateProvider');
  }
  return context;
};

export default FormStateProvider;
