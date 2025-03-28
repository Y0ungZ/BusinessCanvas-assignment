import { MoreOutlined } from '@ant-design/icons';
import Button from './Button';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

interface RowActionProps {
  id: string;
}

const RowAction = ({ id }: RowActionProps) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '수정',
      onClick: () => {
        console.log(id);
      },
    },
    { type: 'divider' },
    {
      key: '2',
      label: '삭제',
      danger: true,
      onClick: () => {
        console.log(id);
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
