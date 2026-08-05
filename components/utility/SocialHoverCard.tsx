import React from 'react';
import { formatRelativeTime } from '@/lib/data/socialDataCache';

interface SocialHoverCardProps {
  platform: string;
  name: string;
  color: "red" | "blue" | "black" | "green";
  labelDirection: "left" | "right";
  latestContent?: {
    type: "commit" | "post" | "video" | "email";
    title: string;
    description?: string;
    date: string;
    url?: string;
    repo?: string;
  };
  link: string;
  isLoading?: boolean;
}

const SocialHoverCard: React.FC<SocialHoverCardProps> = ({
  platform,
  name,
  color,
  labelDirection,
  latestContent,
  link,
  isLoading = false
}) => {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    black: "bg-gray-50 border-gray-200 text-gray-900", 
    red: "bg-red-50 border-red-200 text-red-900",
    green: "bg-green-50 border-green-200 text-green-900"
  };

  const iconClasses = {
    blue: "text-blue-500",
    black: "text-gray-500",
    red: "text-red-500", 
    green: "text-green-500"
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'commit': return '🔨';
      case 'post': return '📝';
      case 'video': return '🎥';
      case 'email': return '📧';
      default: return '📌';
    }
  };

  if (isLoading && (platform === 'github' || platform === 'twitter' || platform === 'youtube')) {
    // Loading state for platforms that should have content
    return (
      <div className={`absolute min-w-[250px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 -top-[80px] z-50 ${labelDirection === "right" ? "-right-4 -translate-x-5" : "-left-4 translate-x-5"}`}>
        <div className={`${colorClasses[color]} border-2 rounded-xl p-4 shadow-lg backdrop-blur-sm`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="animate-spin w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
            <span className='text-sm'>Loading latest {platform} activity...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!latestContent || link === "#") {
    // Fallback to original simple hover card
    return (
      <div className={`absolute min-w-[80px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 p-2 rounded-lg -top-8 ${labelDirection === "right" ? "-right-23 -translate-x-5" : "-left-23 translate-x-5"} ${color === "blue" ? "bg-blue-100" : color === "black" ? "bg-gray-200" : color === "red" ? "bg-red-200" : color === "green" ? "bg-green-200" : ""}`}>
        <h6 className='text-sm text-center'>{link === "#" ? "Coming soon" : name}</h6>
      </div>
    );
  }

  return (
    <div className={`absolute min-w-[320px] max-w-[340px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 -top-[120px] z-50 ${labelDirection === "right" ? "-right-4 -translate-x-5" : "-left-4 translate-x-5"}`}>
      <div className={`${colorClasses[color]} border-2 rounded-xl p-4 shadow-lg backdrop-blur-sm`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={`text-lg ${iconClasses[color]}`}>
              {getContentIcon(latestContent.type)}
            </span>
            <h6 className='font-semibold text-sm capitalize'>{name}</h6>
          </div>
          <span className='text-xs text-gray-500'>
            {formatRelativeTime(latestContent.date)}
          </span>
        </div>

        {/* Content */}
        <div className="mb-3">
          <h6 className='font-medium text-sm leading-tight mb-1 line-clamp-2'>
            {latestContent.title}
          </h6>
          {latestContent.description && (
            <p className='text-xs text-gray-600 line-clamp-2 leading-relaxed'>
              {latestContent.description}
            </p>
          )}
          {latestContent.repo && (
            <div className={`inline-block mt-2 px-2 py-1 rounded-full text-xs ${color === "blue" ? "bg-blue-100" : "bg-gray-100"}`}>
              📂 {latestContent.repo}
            </div>
          )}
        </div>

        {/* Action */}
        {latestContent.url && latestContent.url !== "#" && (
          <a
            href={latestContent.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`text-xs font-medium ${iconClasses[color]} hover:underline`}
          >
            View {latestContent.type} →
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialHoverCard;