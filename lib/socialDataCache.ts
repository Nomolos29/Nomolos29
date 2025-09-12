interface GitHubEvent {
  type: string;
  created_at: string;
  repo: {
    name: string;
  };
  payload: {
    commits: Array<{
      message: string;
      sha: string;
    }>;
  };
}

export interface CachedData {
  github?: {
    type: "commit";
    title: string;
    description?: string;
    date: string;
    url: string;
    repo: string;
  };
  twitter?: {
    type: "post";
    title: string;
    date: string;
    url: string;
  };
  youtube?: {
    type: "video";
    title: string;
    date: string;
    url: string;
  };
  lastUpdated: string;
}

const CACHE_KEY = 'social-data-cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function fetchLatestGitHubActivity(username: string = 'Nomolos29') {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/events?per_page=10`);
    if (!response.ok) throw new Error('GitHub API failed');
    
    const events: GitHubEvent[] = await response.json();
    
    // Find the latest push event
    const pushEvent = events.find((event: GitHubEvent) => event.type === 'PushEvent');
    
    if (pushEvent && pushEvent.payload.commits.length > 0) {
      const latestCommit = pushEvent.payload.commits[0];
      return {
        type: "commit" as const,
        title: latestCommit.message.split('\n')[0], // First line of commit message
        description: latestCommit.message.split('\n').slice(1).join(' ').trim() || undefined,
        date: pushEvent.created_at,
        url: `https://github.com/${pushEvent.repo.name}/commit/${latestCommit.sha}`,
        repo: pushEvent.repo.name.split('/')[1]
      };
    }
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
  }
  return null;
}

export async function fetchLatestTwitterPost() {
  // Mock data for now - would need Twitter API setup
  return {
    type: "post" as const,
    title: "Building amazing web experiences with Next.js and TypeScript! 🚀",
    date: new Date().toISOString(),
    url: "https://x.com/Nomoreloss29"
  };
}

export async function fetchLatestYouTubeVideo() {
  // Mock data for now - would need YouTube API setup
  return {
    type: "video" as const,
    title: "Modern React Development Best Practices",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    url: "#"
  };
}

export async function updateCacheIfNeeded(): Promise<CachedData | null> {
  if (typeof window === 'undefined') return null; // Server-side check
  
  const cached = localStorage.getItem(CACHE_KEY);
  const now = new Date();
  
  // Check if it's midnight or cache is stale
  const shouldUpdate = !cached || 
    (cached && Date.now() - new Date(JSON.parse(cached).lastUpdated).getTime() > CACHE_DURATION) ||
    (now.getHours() === 0 && now.getMinutes() < 5); // Update window at midnight
  
  if (shouldUpdate) {
    console.log('Updating social data cache...');
    
    const [github, twitter, youtube] = await Promise.all([
      fetchLatestGitHubActivity(),
      fetchLatestTwitterPost(),
      fetchLatestYouTubeVideo()
    ]);
    
    const newCache: CachedData = {
      ...(github && { github }),
      ...(twitter && { twitter }),
      ...(youtube && { youtube }),
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(CACHE_KEY, JSON.stringify(newCache));
    return newCache;
  }
  
  return cached ? JSON.parse(cached) : null;
}

export function getCachedSocialData(): CachedData | null {
  if (typeof window === 'undefined') return null;
  
  const cached = localStorage.getItem(CACHE_KEY);
  return cached ? JSON.parse(cached) : null;
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours}h ago`;
  if (diffInDays < 7) return `${diffInDays}d ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w ago`;
  return `${Math.floor(diffInDays / 30)}mo ago`;
}