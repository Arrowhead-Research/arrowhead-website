import "server-only";

import { cookies } from "next/headers";

export type Theme = "dark" | "light";

const THEME_COOKIE = "theme";

/**
 * Read the user's theme preference from cookies (server-side only).
 * Defaults to "dark" if no cookie is set.
 */
export async function getThemeFromCookie(): Promise<Theme> {
  const cookieStore = await cookies();
  const value = cookieStore.get(THEME_COOKIE)?.value;
  return value === "light" ? "light" : "dark";
}
