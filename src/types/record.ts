import { SelectField } from './field';

export type UserDataType = {
  id: string;
  이름: string;
  주소?: string | null;
  메모?: string;
  가입일: string;
  직업?: SelectField['options'][number];
  '이메일 수신 동의'?: boolean;
  [key: string]: boolean | string | undefined | null;
};
