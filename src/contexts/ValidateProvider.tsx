import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface ValidateState {
  isValid: boolean;
  validate: () => void;
  invalidate: () => void;
}

const ValidateContext = createContext<ValidateState | undefined>(undefined);

const ValidateProvider = ({ children }: PropsWithChildren) => {
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    setIsValid(true);
  };

  const invalidate = () => {
    setIsValid(false);
  };

  const value = { isValid, validate, invalidate };
  return (
    <ValidateContext.Provider value={value}>
      {children}
    </ValidateContext.Provider>
  );
};

export const useValidate = () => {
  const context = useContext(ValidateContext);
  if (!context) {
    throw new Error('useValidate must be used within a ValidateProvider');
  }
  return context;
};

export default ValidateProvider;
