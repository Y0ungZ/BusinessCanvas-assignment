type BaseField = {
  label: string;
  required: boolean;
};

export type TextField = BaseField & {
  type: 'text' | 'textarea';
};

export type DateField = BaseField & {
  type: 'date';
};

export type SelectField = BaseField & {
  type: 'select';
  option: '개발자' | 'PO' | '디자이너';
};

export type CheckboxField = BaseField & {
  type: 'checkbox';
};

export type FieldType = TextField | DateField | SelectField | CheckboxField;
