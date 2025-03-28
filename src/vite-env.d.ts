/// <reference types="vite/client" />

export type StorageType = 'in-memory' | 'local-storage';
interface ImportMetaEnv {
  readonly VITE_STORAGE: StorageType;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
