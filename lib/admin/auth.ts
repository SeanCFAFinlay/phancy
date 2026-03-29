import { cookies } from 'next/headers';

// Simple session-based auth for admin panel
// In production, use a proper auth library like NextAuth.js

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'phancy2024';
const SESSION_SECRET = process.env.SESSION_SECRET || 'phancy-mcm-secret-key-change-in-production';

// Simple hash function for session token
function createSessionToken(username: string): string {
  const timestamp = Date.now();
  const data = `${username}:${timestamp}:${SESSION_SECRET}`;
  // Simple base64 encoding (use proper JWT in production)
  return Buffer.from(data).toString('base64');
}

function verifySessionToken(token: string): { valid: boolean; username?: string } {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [username, timestamp, secret] = decoded.split(':');

    if (secret !== SESSION_SECRET) {
      return { valid: false };
    }

    // Session expires after 24 hours
    const tokenTime = parseInt(timestamp);
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (now - tokenTime > twentyFourHours) {
      return { valid: false };
    }

    return { valid: true, username };
  } catch {
    return { valid: false };
  }
}

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function createSession(username: string): string {
  return createSessionToken(username);
}

export function verifySession(token: string): boolean {
  return verifySessionToken(token).valid;
}

export async function getSession(): Promise<{ authenticated: boolean; username?: string }> {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_session')?.value;

  if (!token) {
    return { authenticated: false };
  }

  const result = verifySessionToken(token);
  return { authenticated: result.valid, username: result.username };
}

export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return session.authenticated;
}
