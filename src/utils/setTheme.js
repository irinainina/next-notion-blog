"use server";

import { cookies } from "next/headers";

export async function setTheme(theme) {
  if (theme !== "light" && theme !== "dark") {
    throw new Error("Invalid theme");
  }

  const cookieStore = await cookies();
  cookieStore.set("theme", theme, { maxAge: 365 * 24 * 60 * 60 });
}
