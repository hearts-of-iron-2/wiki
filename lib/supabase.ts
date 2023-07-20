import { createClient } from "@supabase/supabase-js";

const projectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(projectUrl, anonKey, {
  auth: {
    detectSessionInUrl: true,
    persistSession: true,
  },
});

export const isUserLoggedIn = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user !== undefined || user !== null;
};
