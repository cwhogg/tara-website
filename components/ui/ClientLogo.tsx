'use client';

import { useState } from 'react';

interface ClientLogoProps {
  name: string;
  logoUrl?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-base',
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getColorFromName(name: string): string {
  // Multi-color palette using primary and secondary colors
  const colors = [
    'bg-primary-500',
    'bg-sage-500',
    'bg-plum-500',
    'bg-taupe-500',
    'bg-primary-400',
    'bg-sage-600',
  ];
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
}

export default function ClientLogo({ name, logoUrl, size = 'md' }: ClientLogoProps) {
  const [imageError, setImageError] = useState(false);

  const showFallback = !logoUrl || imageError;

  if (showFallback) {
    return (
      <div
        className={`${sizeClasses[size]} ${getColorFromName(name)} rounded-lg flex items-center justify-center text-white font-semibold`}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} flex items-center justify-center`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoUrl}
        alt={`${name} logo`}
        className="max-w-full max-h-full object-contain"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
