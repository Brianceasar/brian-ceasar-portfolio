import { ChangeEvent } from 'react';
import { RadioGroupProps } from '@/types/forms/project-questionnaire';

export default function RadioGroup({
  label,
  name,
  options,
  onChange,
}: RadioGroupProps) {
  return (
    <div>
      <p className="text-sm font-semibold mb-2">{label}</p>
      <div className="space-y-2">
        {options.map((option) => {
          const value = typeof option === 'string' ? option : option.value;
          const text = typeof option === 'string' ? option : option.label;

          return (
            <label key={value} className="flex items-center gap-2">
              <input
                type="radio"
                name={name}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange?.(e.target.value)
                }
              />
              {text}
            </label>
          );
        })}
      </div>
    </div>
  );
}
