const fs = require('fs');
const path = require('path');

function loadEnvFile(relPath) {
  const absPath = path.join(process.cwd(), relPath);
  if (!fs.existsSync(absPath)) return;
  const txt = fs.readFileSync(absPath, 'utf8');
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq < 0) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}

function redactMongoUri(uri) {
  try {
    const u = new URL(uri);
    if (u.username) u.username = '<redacted>';
    if (u.password) u.password = '<redacted>';
    // URL#toString() includes credentials if present; we just replaced them.
    return u.toString();
  } catch {
    // Fallback for any non-URL-parseable Mongo strings
    return uri.replace(/\/\/([^@/]+)@/g, '//<redacted>@');
  }
}

// Next.js dotenv precedence (most specific first)
['.env.local', '.env.development.local', '.env.development', '.env'].forEach(
  loadEnvFile
);

const uri =
  process.env.MONGODB_URI || process.env.MONGO_URI || process.env.DATABASE_URL;

if (!uri) {
  console.error(
    [
      'DB TEST: missing connection string.',
      'Set `MONGODB_URI` (preferred), or `MONGO_URI`, or `DATABASE_URL`.',
      'You can put it in `.env.local` at the repo root, or export it in your shell.',
    ].join(' ')
  );
  process.exit(2);
}

async function main() {
  const { MongoClient } = require('mongodb');
  const started = Date.now();

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 8000,
    connectTimeoutMS: 8000,
  });

  await client.connect();
  const ping = await client.db().admin().ping();
  const elapsedMs = Date.now() - started;

  console.log('DB CONNECT OK');
  console.log(' - target:', redactMongoUri(uri));
  console.log(' - ping:', ping);
  console.log(' - time_ms:', elapsedMs);

  await client.close();
}

main().catch((err) => {
  console.error('DB CONNECT FAILED');
  console.error(err && (err.stack || err.message || err));
  process.exit(1);
});

