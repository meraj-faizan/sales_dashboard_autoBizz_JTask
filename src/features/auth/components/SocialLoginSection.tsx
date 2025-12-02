import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import SocialLoginButton from "./SocialLoginButton";

export default function SocialLoginSection() {
  return (
    <div className="space-y-3">
      <SocialLoginButton
        buttonText="Continue with Google"
        icon={<FcGoogle className="text-xl" />}
        onClick={() => console.log("Google login")}
      />

      <SocialLoginButton
        buttonText="Continue with Facebook"
        icon={<FaFacebook className="text-blue-600 text-xl" />}
        onClick={() => console.log("Facebook login")}
      />

      <SocialLoginButton
        buttonText="Continue with Apple"
        icon={<FaApple className="text-xl" />}
        onClick={() => console.log("Apple login")}
      />
    </div>
  );
}
