import { Checkbox, Flex, Table, TableColumnType } from 'antd';
import Button from '../components/Button';
import { PlusOutlined } from '@ant-design/icons';
import { UserDataType } from '../types/record';
import { TableRowSelection } from 'antd/es/table/interface';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import RowAction from '../components/RowAction';

const getFilterProps = (
  dataIndex: string,
  datas: string[],
): TableColumnType<UserDataType> => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
    <div style={{ padding: 8 }}>
      {datas.map(option => (
        <div key={option} style={{ padding: '0.3125rem 0.75rem' }}>
          <Checkbox
            value={option}
            checked={selectedKeys.includes(option)}
            onChange={() => {
              const newSelectedKeys = selectedKeys.includes(option)
                ? selectedKeys.filter(key => key !== option)
                : [...selectedKeys, option];
              setSelectedKeys(newSelectedKeys);
              confirm();
            }}
          >
            {option}
          </Checkbox>
        </div>
      ))}
    </div>
  ),
  onFilter: (value, record: UserDataType) => record[dataIndex] === value,
});

const columns: TableColumnType<UserDataType>[] = [
  {
    title: '이름',
    dataIndex: '이름',
    width: '7.5rem',
    ...getFilterProps('이름', ['John Doe']),
  },
  {
    title: '주소',
    dataIndex: '주소',
    width: '15.5rem',
    ...getFilterProps('주소', ['서울 강남구']),
  },
  { title: '메모', dataIndex: '메모', width: '15.5rem' },
  { title: '가입일', dataIndex: '가입일', width: '12.5rem' },
  { title: '직업', dataIndex: '직업', width: '15.5rem' },
  {
    title: '이메일 수신 동의',
    dataIndex: '이메일 수신 동의',
    width: '9.5rem',
    render: (checked: boolean) => <Checkbox checked={checked} />,
  },
  {
    title: '',
    dataIndex: 'action',
    width: '3rem',
    render: (_, record: UserDataType) => <RowAction id={record.id} />,
  },
];

const dataSource: UserDataType[] = [
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

const UserList = () => {
  const [selectedRowKeys] = useState<React.Key[]>([]);

  const rowSelection: TableRowSelection<UserDataType> = {
    selectedRowKeys,
  };

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        style={{ padding: '0.5rem 0.875rem' }}
      >
        <span className="typo--bold">회원 목록</span>
        <Button
          color="primary"
          variant="solid"
          content="basic"
          icon={<PlusOutlined />}
        >
          추가
        </Button>
      </Flex>
      <Table<UserDataType>
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        rowKey={'id'}
        pagination={false}
      />
    </div>
  );
};

export default UserList;
