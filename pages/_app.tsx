import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (window.frameElement) {
      setStyle(
        {
          backgroundColor: "transparent",
        },
      );
    }
  }, []);

  return <Component style={style} {...pageProps} />;
}
