import React from 'react';
import Link from 'next/link';

interface CompanyLogoProps {
  name: string;
  description?: string;
  website?: string;
  logoText?: string;
  industry?: string;
  featured?: boolean;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({
  name,
  description,
  website,
  logoText,
  industry,
  featured = false
}) => {
  const content = (
    <div className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-200/50 hover:border-gray-300/60 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/20 ${featured ? 'p-8' : 'p-6'} cursor-pointer`}>
      {/* Logo/Brand Mark */}
      <div className="flex items-center justify-center mb-4">
        <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 font-bold ${featured ? 'w-20 h-20 text-xl' : 'w-16 h-16 text-lg'} group-hover:scale-110 transition-transform duration-300`}>
          {logoText || name.charAt(0)}
        </div>
      </div>

      {/* Company Info */}
      <div className="text-center space-y-2">
        <h3 className={`font-semibold text-gray-900 group-hover:text-blue-900 transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
          {name}
        </h3>
        
        {industry && (
          <p className="text-sm text-gray-500 font-medium">
            {industry}
          </p>
        )}
        
        {description && (
          <p className={`text-gray-600 leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
            {description}
          </p>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/20 rounded-2xl transition-all duration-300 pointer-events-none" />
      
      {/* External Link Icon */}
      {website && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
            ↗
          </div>
        </div>
      )}
    </div>
  );

  if (website) {
    return (
      <Link href={website} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
};

export default CompanyLogo;