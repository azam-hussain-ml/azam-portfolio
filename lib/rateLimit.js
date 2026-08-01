// Best-effort in-memory rate limiter.
// Note: serverless functions are ephemeral, so this limits per warm instance.
// For strict production limits, use Upstash Redis (@upstash/ratelimit).

const hits = new Map();
const WINDOW_MS = 60_000; // 1 minute
const MAX = 8; // max requests per window per IP

export function rateLimit(ip) {
  const now = Date.now();
  const rec = hits.get(ip) || { count: 0, start: now };
  if (now - rec.start > WINDOW_MS) {
    rec.count = 0;
    rec.start = now;
  }
  rec.count++;
  hits.set(ip, rec);
  return rec.count <= MAX;
}
