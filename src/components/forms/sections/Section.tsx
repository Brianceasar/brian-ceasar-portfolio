import { SectionProps } from '@/types/forms/project-questionnaire';

export default function Section({ title, icon, children }: SectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="flex items-center gap-2 text-xl font-bold">
        {icon}
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
