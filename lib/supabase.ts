import { createClient } from "@supabase/supabase-js";
import { runInBrowser } from "./clientside";

const projectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const storage = {
  getItem: (key: string) => {
    return new Promise<string>((resolve, reject) => {
      try {
        runInBrowser(() => {
          const item = window.localStorage.getItem(key);
          resolve(item);
        });
        resolve(null);
      } catch (error) {
        reject(error);
      }
    });
  },
  setItem: (key: string, value: string) => {
    return new Promise<void>((resolve, reject) => {
      try {
        runInBrowser(() => {
          window.localStorage.setItem(key, value);
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  },
  removeItem: (key: string) => {
    return new Promise<void>((resolve, reject) => {
      try {
        runInBrowser(() => {
          window.localStorage.removeItem(key);
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  },
};

export const supabase = createClient(projectUrl, anonKey, {
  auth: {
    detectSessionInUrl: true,
    persistSession: true,
    flowType: "pkce",
    storage,
  },
});
