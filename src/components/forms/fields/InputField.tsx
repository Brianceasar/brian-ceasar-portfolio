import { InputFieldProps } from '@/types/forms/project-questionnaire';

export default function InputField({
  label,
  type = 'text',
  ...props
}: InputFieldProps) {
  return (
    <div>
      <label className="block mb-1 text-sm font-semibold">{label}</label>
      <input
        type={type}
        {...props}
        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#B00D1C]/20"
      />
    </div>
  );
}
