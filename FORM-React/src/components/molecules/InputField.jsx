import Label from "../atoms/Label/Label";
import Input from "../atoms/Input/Input";

export default function InputField({
  label,
  type,
  value,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <Label text={label} />
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
