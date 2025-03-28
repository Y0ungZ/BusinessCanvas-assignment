import { Checkbox, Flex, Table, TableColumnType } from 'antd';
import Button from '../components/Button';
import { PlusOutlined } from '@ant-design/icons';
import { UserDataType } from '../types/record';
import { TableRowSelection } from 'antd/es/table/interface';
import { useState } from 'react';
import RowAction from '../components/RowAction';
import { useModal } from '../contexts/ModalProvider';
import { useStorage } from '../contexts/StorageProvider';

const getFilterProps = (
  dataIndex: string,
  datas: string[],
): TableColumnType<UserDataType> => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
    <div style={{ padding: 8 }}>
      {datas.map((option, idx) => {
        const label =
          String(option) === 'true'
            ? '선택됨'
            : String(option) === 'false'
            ? '선택 안함'
            : option;

        return (
          <div key={idx} style={{ padding: '0.3125rem 0.75rem' }}>
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
              {label}
            </Checkbox>
          </div>
        );
      })}
    </div>
  ),
  onFilter: (value, record: UserDataType) => record[dataIndex] === value,
});

const UserList = () => {
  const [selectedRowKeys] = useState<React.Key[]>([]);
  const { records, rowValueSet } = useStorage();
  const { openModal } = useModal();

  const rowSelection: TableRowSelection<UserDataType> = {
    selectedRowKeys,
  };

  const columns: TableColumnType<UserDataType>[] = [
    {
      title: '이름',
      dataIndex: '이름',
      width: '7.5rem',
      ...getFilterProps('이름', rowValueSet('이름')),
    },
    {
      title: '주소',
      dataIndex: '주소',
      width: '15.5rem',
      ...getFilterProps('주소', rowValueSet('주소')),
    },
    {
      title: '메모',
      dataIndex: '메모',
      width: '15.5rem',
      ...getFilterProps('메모', rowValueSet('메모')),
    },
    {
      title: '가입일',
      dataIndex: '가입일',
      width: '12.5rem',
      ...getFilterProps('가입일', rowValueSet('가입일')),
    },
    {
      title: '직업',
      dataIndex: '직업',
      width: '15.5rem',
      ...getFilterProps('직업', rowValueSet('직업')),
    },
    {
      title: '이메일 수신 동의',
      dataIndex: '이메일 수신 동의',
      width: '9.5rem',
      render: (checked: boolean) => <Checkbox checked={checked} />,
      ...getFilterProps('이메일 수신 동의', rowValueSet('이메일 수신 동의')),
    },
    {
      title: '',
      dataIndex: 'action',
      width: '3rem',
      render: (_, record: UserDataType) => <RowAction record={record} />,
    },
  ];

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
          icon={<PlusOutlined />}
          onClick={() => openModal('create')}
        >
          추가
        </Button>
      </Flex>
      <Table<UserDataType>
        rowSelection={rowSelection}
        columns={columns}
        dataSource={records}
        rowKey={'id'}
        pagination={false}
      />
    </div>
  );
};

export default UserList;
