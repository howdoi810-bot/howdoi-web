export const SITE = {
  name: "HowDoI",
  url: "https://howdoi.id.vn",
  description: "Copy-paste setup guides. Clear requirements. Honest limitations."
} as const;

// No provider is connected in phase 1. Do not turn these into public-env toggles.
export const INTEGRATIONS = {
  projectEnquiries: false,
  advertising: false,
  analytics: false
} as const;

export function isPublicRelease(): boolean {
  return process.env.HOWDOI_PUBLIC_RELEASE === "true"
    && process.env.VERCEL_ENV !== "preview"
    && process.env.NODE_ENV === "production";
}

export function canonical(path = "/"): string {
  return new URL(path, SITE.url).toString();
}
