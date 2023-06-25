import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../styles/index.css";
import "../styles/iFrame.css";

function inIframe() {
  try {
    return window.sessionStorage.getItem("inside-iframe") === "true" ||
      window.self !== window.top;
  } catch (e) {
    return true;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    if (inIframe()) {
      let c = "inside-iframe";
      window.sessionStorage.setItem("inside-iframe", "true");
      setClasses(c);
    }
  }, []);

  return (
    <div className={classes}>
      <Component {...pageProps} />
    </div>
  );
}
