import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { isUserLoggedIn, supabase } from "../lib/supabase";

type Props = {
  success: Function;
};

const LoginComponent = ({ success }: Props) => {
  useEffect(() => {
    const checkUser = async () => {
      if (await isUserLoggedIn()) {
        success();
      }
    };
    checkUser();
  }, []);

  return (
    <div className="grid place-items-center h-full">
      <Auth
        providers={["discord"]}
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        onlyThirdPartyProviders={true}
      />
    </div>
  );
};

export default LoginComponent;
