/**
 * Authentication-ready architecture placeholder.
 * Integrate NextAuth or Clerk by implementing these interfaces.
 */

export type UserRole = "admin" | "client" | "candidate" | "support";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  image?: string;
}

export interface Session {
  user: AuthUser;
  expires: string;
}

/** Placeholder - replace with NextAuth getServerSession or Clerk auth() */
export async function getSession(): Promise<Session | null> {
  // TODO: Implement with NextAuth or Clerk
  return null;
}

/** Placeholder - replace with role-based middleware checks */
export function hasRole(user: AuthUser | null, roles: UserRole[]): boolean {
  if (!user) return false;
  return roles.includes(user.role);
}

/** Portal route guards - use in middleware or layout */
export const portalRoutes = {
  admin: "/portal/admin",
  client: "/portal/client",
  candidate: "/portal/candidate",
} as const;
