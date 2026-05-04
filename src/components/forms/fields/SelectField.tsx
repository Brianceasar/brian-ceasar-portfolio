import { SelectFieldProps } from '@/types/forms/project-questionnaire';

export default function SelectField({
  label,
  options,
  ...props
}: SelectFieldProps) {
  return (
    <div>
      <label className="block mb-1 text-sm font-semibold">{label}</label>
      <select
        {...props}
        className="w-full px-4 py-3 border rounded-xl"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
