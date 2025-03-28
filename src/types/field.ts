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

export const JOB_OPTIONS = ['개발자', 'PO', '디자이너'] as const;

export type SelectField = BaseField & {
  type: 'select';
  options: (typeof JOB_OPTIONS)[number];
};

export type CheckboxField = BaseField & {
  type: 'checkbox';
};

export type FieldType = TextField | DateField | SelectField | CheckboxField;
