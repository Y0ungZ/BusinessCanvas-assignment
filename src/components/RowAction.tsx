import { MoreOutlined } from '@ant-design/icons';
import Button from './Button';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { useModal } from '../contexts/ModalProvider';
import { UserDataType } from '../types/record';

interface RowActionProps<T> {
  record: T;
}

const RowAction = ({ record }: RowActionProps<UserDataType>) => {
  const { openModal } = useModal();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '수정',
      onClick: () => {
        openModal();
      },
    },
    { type: 'divider' },
    {
      key: '2',
      label: '삭제',
      danger: true,
      onClick: () => {
        console.log(record.id);
      },
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        style: { width: '11rem', padding: '0.5rem' },
      }}
      trigger={['click']}
      placement="bottomRight"
    >
      <Button content="iconOnly" icon={<MoreOutlined />} />
    </Dropdown>
  );
};
export default RowAction;
