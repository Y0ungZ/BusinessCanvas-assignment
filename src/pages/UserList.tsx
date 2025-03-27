import { Flex, Table } from 'antd';
import Button from '../components/Button';
import { PlusOutlined } from '@ant-design/icons';

const UserList = () => {
  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        style={{ padding: '8px 14px 8px 14px' }}
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
      <Table />
    </div>
  );
};

export default UserList;
