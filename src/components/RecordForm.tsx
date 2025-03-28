import { Checkbox, DatePicker, Form, Input, Select } from 'antd';
import Label from './Label';
import TextArea from 'antd/es/input/TextArea';
import { JOB_OPTIONS } from '../types/field';
import { useForm } from 'antd/es/form/Form';
import { UserDataType } from '../types/record';

interface RecordFormProps<T> {
  handleFormDataChange: (data: T) => void;
}

const RecordForm = ({
  handleFormDataChange,
}: RecordFormProps<UserDataType>) => {
  const [form] = useForm<UserDataType>();

  const handleValueChange = () => {
    const values = form.getFieldsValue();
    handleFormDataChange(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ padding: '0.625rem 1.25rem' }}
      onValuesChange={handleValueChange}
      initialValues={{
        직업: JOB_OPTIONS[0],
      }}
    >
      <Form.Item name="이름" label={<Label htmlFor="이름" required />}>
        <Input id="이름" placeholder="input" />
      </Form.Item>
      <Form.Item name="주소" label={<Label htmlFor="주소" />}>
        <Input id="주소" placeholder="input" />
      </Form.Item>
      <Form.Item name="메모" label={<Label htmlFor="메모" />}>
        <TextArea id="메모" rows={2} placeholder="Textarea" />
      </Form.Item>
      <Form.Item name="가입일" label={<Label htmlFor="가입일" required />}>
        <DatePicker id="가입일" />
      </Form.Item>
      <Form.Item name="직업" label={<Label htmlFor="직업" />}>
        <Select
          id="직업"
          options={JOB_OPTIONS.map(option => ({
            label: option,
            value: option,
          }))}
        />
      </Form.Item>
      <Form.Item
        name="이메일 수신 동의"
        valuePropName="checked"
        label={<Label htmlFor="이메일 수신 동의" />}
      >
        <Checkbox id="이메일 수신 동의" />
      </Form.Item>
    </Form>
  );
};

export default RecordForm;
