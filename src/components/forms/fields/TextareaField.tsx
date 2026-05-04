import { TextareaFieldProps } from '@/types/forms/project-questionnaire';

export default function TextareaField({
  label,
  rows = 4,
  ...props
}: TextareaFieldProps) {
  return (
    <div>
      <label className="block mb-1 text-sm font-semibold">{label}</label>
      <textarea
        rows={rows}
        {...props}
        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#B00D1C]/20"
      />
    </div>
  );
}
