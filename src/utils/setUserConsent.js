"use server";

import { cookies } from "next/headers";

export async function setUserConsent(consent) {
  const cookieStore = await cookies();
  cookieStore.set("userConsent", consent, { maxAge: 365 * 24 * 60 * 60 });
}
