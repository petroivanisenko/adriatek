const DEFAULT_ENDPOINT = process.env.NEXT_PUBLIC_AWS_ENDPOINT || "";
const DEFAULT_BUCKET = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME || "";

export type ResolveImageOptions = {
  endpoint?: string;
  bucket?: string;
  /**
   * If true, always return `null` when we can't resolve a usable URL.
   * If false, we may return the original input for already-absolute URLs.
   */
  strict?: boolean;
};

function isAbsoluteUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

function stripLeadingSlashes(s: string): string {
  return s.replace(/^\/+/, "");
}

function stripTrailingSlashes(s: string): string {
  return s.replace(/\/+$/, "");
}

/**
 * Takes product/category "image" field value and converts it to a public URL.
 *
 * Supports inputs:
 * - Stored key (preferred): "1765500131884-imported.jpeg"
 * - Already-absolute URL (legacy): "http://localhost:9000/bucket/key.jpeg"
 *
 * Env vars used by default:
 * - NEXT_PUBLIC_AWS_ENDPOINT
 * - NEXT_PUBLIC_AWS_BUCKET_NAME
 */
export function resolvePublicImageUrl(
  image: string | null | undefined,
  options: ResolveImageOptions = {},
): string | null {
  if (!image) return null;

  const trimmed = image.trim();
  if (!trimmed) return null;

  if (isAbsoluteUrl(trimmed)) {
    return options.strict ? null : trimmed;
  }

  const endpoint = stripTrailingSlashes(options.endpoint ?? DEFAULT_ENDPOINT);
  const bucket = stripLeadingSlashes(
    stripTrailingSlashes(options.bucket ?? DEFAULT_BUCKET),
  );

  if (!endpoint) {
    return null;
  }

  const key = stripLeadingSlashes(trimmed);

  if (bucket) {
    return `${endpoint}/${bucket}/${key}`;
  }

  return `${endpoint}/${key}`;
}

/**
 * Extracts the S3 object key from either a stored key or a legacy absolute URL.
 * If `bucket` is provided (or env var exists), it will try to strip "/{bucket}/"
 * prefix from the URL path. Otherwise, it falls back to returning the last path
 * segment for absolute URLs.
 */
export function extractImageKey(
  image: string | null | undefined,
  options: Pick<ResolveImageOptions, "bucket"> = {},
): string | null {
  if (!image) return null;

  const trimmed = image.trim();
  if (!trimmed) return null;

  if (!isAbsoluteUrl(trimmed)) return stripLeadingSlashes(trimmed);

  const bucket = stripLeadingSlashes(
    stripTrailingSlashes(options.bucket ?? DEFAULT_BUCKET),
  );

  try {
    const url = new URL(trimmed);
    const path = stripLeadingSlashes(url.pathname);

    if (bucket) {
      const prefix = `${bucket}/`;
      if (path.startsWith(prefix)) return path.slice(prefix.length);
    }

    const parts = path.split("/").filter(Boolean);
    return parts.length ? parts[parts.length - 1] : null;
  } catch {
    return null;
  }
}
