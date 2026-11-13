import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Keep persisted model caches out of the real user cache directory.
process.env.XDG_CACHE_HOME = mkdtempSync(join(tmpdir(), 'omniroute-cache-'));
