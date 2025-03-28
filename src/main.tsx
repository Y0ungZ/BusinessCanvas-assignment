import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import { ConfigProvider } from 'antd';
import ModalProvider from './contexts/ModalProvider.tsx';
import FormStateProvider from './contexts/FormStateProvider.tsx';
import StorageProvider from './contexts/StorageProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Pretendard', sans-serif",
          colorPrimary: '#4A7CFE',
          borderRadius: 8,
        },
        components: {
          Button: {
            colorPrimaryActive: '#345DD9',
          },
        },
      }}
    >
      <StorageProvider>
        <FormStateProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </FormStateProvider>
      </StorageProvider>
    </ConfigProvider>
  </StrictMode>,
);
