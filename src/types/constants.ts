import { nanoid } from 'nanoid';
import { UserDataType } from '../types/record';

export const INITIAL_USER_RECORDS: UserDataType[] = [
  {
    id: nanoid(),
    이름: 'John Doe',
    주소: '서울 강남구',
    메모: '외국인',
    가입일: '2024-10-02',
    직업: '개발자',
    '이메일 수신 동의': true,
  },
  {
    id: nanoid(),
    이름: 'Foo Bar',
    주소: '서울 서초구',
    메모: '한국인',
    가입일: '2024-10-01',
    직업: 'PO',
    '이메일 수신 동의': false,
  },
];
