import "server-only";

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";

import { MongoClient } from "mongodb";

let authInstance: ReturnType<typeof betterAuth> | null = null;

const MONGODB_URI = process.env.MONGODB_URI;

declare global {
  // eslint-disable-next-line no-var
  var mongoClientCache:
    | {
        client: MongoClient | null;
        promise: Promise<MongoClient> | null;
      }
    | undefined;
}

const mongoCached =
  global.mongoClientCache ?? (global.mongoClientCache = { client: null, promise: null });

async function getMongoClient() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI must be set (e.g. in .env.local)");
  }

  if (mongoCached.client) return mongoCached.client;
  if (!mongoCached.promise) {
    mongoCached.promise = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 8000,
    }).connect();
  }

  mongoCached.client = await mongoCached.promise;
  return mongoCached.client;
}

export const getAuth = async () => {
  if (authInstance) return authInstance;

  const client = await getMongoClient();
  const db = client.db();

  authInstance = betterAuth({
    database: mongodbAdapter(db, { client }),
    plugins: [nextCookies()],
  });

  return authInstance;
};