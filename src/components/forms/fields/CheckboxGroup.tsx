import { CheckboxGroupProps } from '@/types/forms/project-questionnaire';

export default function CheckboxGroup({
  label,
  name,
  options,
}: CheckboxGroupProps) {
  return (
    <div>
      <p className="text-sm font-semibold mb-2">{label}</p>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input type="checkbox" name={name} value={option} />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
