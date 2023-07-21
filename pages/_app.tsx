import { AppProps } from "next/app";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    supabase.auth.initialize();
  }, []);

  return <Component {...pageProps} />;
}
