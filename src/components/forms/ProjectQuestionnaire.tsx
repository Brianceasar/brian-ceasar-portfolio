'use client';

import { useState } from 'react';
import {
  User,
  Briefcase,
  Globe,
  Layers,
//   Palette,
  ShoppingCart,
//   Settings,
  Clock,
//   MessageSquare,
  Send,
} from 'lucide-react';

import Section from './sections/Section';
import InputField from './fields/InputField';
import TextareaField from './fields/TextareaField';
import SelectField from './fields/SelectField';
import RadioGroup from './fields/RadioGroup';
import CheckboxGroup from './fields/CheckboxGroup';

import { WebsiteType } from '@/types/forms/project-questionnaire';

export default function ProjectQuestionnaire() {
  const [websiteType, setWebsiteType] = useState<WebsiteType>('');

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <form className="space-y-12">
          <Section title="Basic Details" icon={<User size={20} />}>
            <InputField label="Full Name" name="name" required />
            <InputField label="Email Address" name="email" type="email" required />
            <InputField label="Phone / WhatsApp" name="phone" type="tel" />
            <InputField label="Company / Brand Name" name="company" />
            <InputField label="Business Location" name="location" />
          </Section>

          <Section title="Business Information" icon={<Briefcase size={20} />}>
            <SelectField
              label="Industry"
              name="industry"
              options={[
                'Retail',
                'Services',
                'Education',
                'Hospitality',
                'NGO',
                'Personal Brand',
                'Other',
              ]}
            />
            <TextareaField
              label="Briefly describe your business"
              name="business_description"
            />
          </Section>

          <Section title="Website Goals" icon={<Globe size={20} />}>
            <RadioGroup
              label="Main website goal"
              name="goal"
              options={[
                'Branding / Online presence',
                'Generate leads',
                'Sell products online',
                'Bookings / appointments',
                'Information only',
              ]}
            />
            <CheckboxGroup
              label="What should visitors do?"
              name="actions"
              options={[
                'Call',
                'WhatsApp',
                'Fill form',
                'Buy products',
                'Book service',
              ]}
            />
          </Section>

          <Section title="Website Type" icon={<Layers size={20} />}>
            <RadioGroup
              label="Website type"
              name="website_type"
              options={[
                { label: 'Template Website', value: 'template' },
                { label: 'Custom Website', value: 'custom' },
                { label: 'Content-Managed Website', value: 'cms' },
                { label: 'E-commerce Website', value: 'ecommerce' },
                { label: 'Not sure (recommend for me)', value: 'unsure' },
              ]}
              onChange={(value) => setWebsiteType(value as WebsiteType)}
            />
          </Section>

          {websiteType === 'ecommerce' && (
            <Section title="E-commerce Details" icon={<ShoppingCart size={20} />}>
              <SelectField
                label="Number of products"
                name="products"
                options={['1–10', '11–50', '51–200', '200+']}
              />
            </Section>
          )}

          <Section title="Timeline & Budget" icon={<Clock size={20} />}>
            <RadioGroup
              label="Desired timeline"
              name="timeline"
              options={['ASAP', '2–4 weeks', '1–2 months', 'Flexible']}
            />
            <RadioGroup
              label="Estimated budget range"
              name="budget"
              options={[
                'Below 500,000 TZS',
                '500,000 – 1,000,000 TZS',
                '1,000,000 – 3,000,000 TZS',
                '3,000,000+ TZS',
              ]}
            />
          </Section>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#B00D1C] text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            <Send size={18} />
            Submit Project Details
          </button>
        </form>
      </div>
    </section>
  );
}
