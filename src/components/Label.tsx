interface LabelProps {
  htmlFor: string;
  required?: boolean;
}

const Label = ({ htmlFor, required = false }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'flex',
        gap: '0.25rem',
        margin: 0,
        height: '2.5rem',
        alignItems: 'center',
      }}
    >
      <span
        className="typo--bold typo--size--regular"
        style={{ color: 'rgba(0,0,0,0.45)' }}
      >
        {htmlFor}
      </span>
      {required && (
        <span className="typo--size--regular" style={{ color: '#FF4D4F' }}>
          *
        </span>
      )}
    </label>
  );
};

export default Label;
