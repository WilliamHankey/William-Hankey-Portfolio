// Shared social-platform → icon mapping used by the hero (page.tsx) and footer.
// Known platforms keep the magecdn icons used by the original design; anything
// else falls back to simple-icons CDN, or null (component renders the initial).

export interface SocialIconSet {
  defaultSrc: string;
  hoverSrc: string;
}

const KNOWN: Record<string, SocialIconSet> = {
  LinkedIn: {
    defaultSrc: "https://s.magecdn.com/social/mw-linkedin.svg",
    hoverSrc: "https://s.magecdn.com/social/tc-linkedin.svg",
  },
  Dribbble: {
    defaultSrc: "https://s.magecdn.com/social/mw-dribbble.svg",
    hoverSrc: "https://s.magecdn.com/social/tc-dribbble.svg",
  },
  Behance: {
    defaultSrc: "https://s.magecdn.com/social/mw-behance.svg",
    hoverSrc: "https://s.magecdn.com/social/tc-behance.svg",
  },
  Medium: {
    defaultSrc: "https://s.magecdn.com/social/mw-medium.svg",
    hoverSrc: "https://s.magecdn.com/social/tc-medium.svg",
  },
};

const SIMPLE_ICONS: Record<string, string> = {
  GitHub: "github",
  X: "x",
  Twitter: "twitter",
  Instagram: "instagram",
  YouTube: "youtube",
  Facebook: "facebook",
  Spotify: "spotify",
  TikTok: "tiktok",
};

export function getSocialIcons(platform: string): SocialIconSet | null {
  const p = platform.trim();
  if (KNOWN[p]) return KNOWN[p];
  const slug =
    SIMPLE_ICONS[p] ?? p.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!slug) return null;
  return {
    defaultSrc: `https://cdn.simpleicons.org/${slug}/6b7280`,
    hoverSrc: `https://cdn.simpleicons.org/${slug}/2C2B3E`,
  };
}