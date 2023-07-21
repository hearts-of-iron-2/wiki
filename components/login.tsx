import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../lib/supabase";

const LoginComponent = () => {
  return (
    <div className="grid place-items-center h-full">
      <Auth
        providers={["discord"]}
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  );
};

export default LoginComponent;
