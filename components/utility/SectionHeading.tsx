import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  alignment = 'center',
  size = 'md',
  className = ''
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const titleSizeClasses = {
    sm: 'text-2xl lg:text-3xl',
    md: 'text-3xl lg:text-4xl',
    lg: 'text-4xl lg:text-5xl xl:text-6xl'
  };

  const subtitleSizeClasses = {
    sm: 'text-base lg:text-lg',
    md: 'text-lg lg:text-xl',
    lg: 'text-xl lg:text-2xl'
  };

  return (
    <header className={`flex flex-col gap-y-3 ${alignmentClasses[alignment]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center justify-center">
          <span className="px-4 py-2 bg-muted text-primary text-sm font-medium rounded-full border border-border shadow-sm">
            {badge}
          </span>
        </div>
      )}
      
      <div className="space-y-3">
        <h2 className={`${titleSizeClasses[size]} font-semibold text-foreground leading-tight tracking-tight`}>
          {title}
        </h2>
        
        {subtitle && (
          <p className={`${subtitleSizeClasses[size]} text-muted-foreground leading-relaxed max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default SectionHeading;