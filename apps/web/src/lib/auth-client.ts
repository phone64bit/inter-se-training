/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAuthClient } from "better-auth/react";

// Explicit type needed because better-auth's inferred type references
// internal modules that tsc considers "not portable".
export const authClient: any = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
});
