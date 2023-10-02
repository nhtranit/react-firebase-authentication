import React from "react";

// hooks
import { useNavigate } from "react-router-dom";

// firebase
import { auth } from "src/configs/firebase";
import { signInWithPopup } from "firebase/auth";

// constants
import { SOCIALS_LOGIN, SocialType } from "./constants";

interface LoginWithSocialProps {
  type?: SocialType;
}
const LoginWithSocial: React.FC<LoginWithSocialProps> = ({
  type = SocialType.Google,
}) => {
  const { provider: Provider, icon: Icon } = SOCIALS_LOGIN[type];
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    signInWithPopup(auth, new Provider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: any = Provider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // navigate to home
        navigate("/");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = Provider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Icon
      style={{ fontSize: 30, color: "#e4c1f9" }}
      onClick={signInWithGoogle}
    />
  );
};
export default LoginWithSocial;
