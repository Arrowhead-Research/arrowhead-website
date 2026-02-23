export type Theme = "dark" | "light";

const THEME_COOKIE = "theme";

/**
 * Set the theme cookie and update the <html> class (client-side).
 */
export function setThemeOnClient(theme: Theme): void {
  document.cookie = `${THEME_COOKIE}=${theme};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
