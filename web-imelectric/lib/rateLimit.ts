/** In-memory rate limiter — per IP, no external dependencies.
 *  Suitable for single-process Node.js deployments (Hostinger VPS, single instance).
 *  Resets on process restart; that is acceptable — the window is 10 min.
 */

const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

interface Entry {
  count: number;
  resetAt: number;
}

const store = new Map<string, Entry>();

/** Remove entries whose window has long expired to prevent unbounded Map growth. */
function prune(now: number): void {
  for (const [key, entry] of store) {
    if (entry.resetAt < now - WINDOW_MS) {
      store.delete(key);
    }
  }
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSecs: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  prune(now);

  const entry = store.get(ip);

  if (!entry || entry.resetAt <= now) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: LIMIT - 1, retryAfterSecs: 0 };
  }

  if (entry.count >= LIMIT) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSecs: Math.ceil((entry.resetAt - now) / 1000),
    };
  }

  entry.count++;
  return { allowed: true, remaining: LIMIT - entry.count, retryAfterSecs: 0 };
}

/** Extract client IP from Next.js request headers (works behind Nginx proxy). */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/** Return a privacy-safe IP label for logs — last octet removed for IPv4. */
export function maskIp(ip: string): string {
  const v4 = ip.match(/^(\d{1,3}\.\d{1,3}\.\d{1,3})\.\d{1,3}$/);
  if (v4) return `${v4[1]}.x`;
  if (ip === "unknown" || ip === "::1") return ip;
  return `${ip.slice(0, 10)}…`;
}
