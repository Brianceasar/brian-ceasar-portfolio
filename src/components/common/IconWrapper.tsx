'use client';

import { LucideIcon } from 'lucide-react';
import React from 'react';

interface IconWrapperProps {
  icon: LucideIcon;
  color?: string;
  size?: number;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, color = '#B00D1C', size = 40 }) => {
  return (
    <div
      className="flex items-center justify-center rounded-full mb-4"
      style={{
        backgroundColor: color,
        width: size + 25,
        height: size + 25,
      }}
    >
      <Icon className="text-white" size={size} />
    </div>
  );
};

export default IconWrapper;
