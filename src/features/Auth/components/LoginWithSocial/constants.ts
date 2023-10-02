import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { GooglePlusCircleFilled, GithubFilled } from "@ant-design/icons";

export enum SocialType {
  Google,
  Github,
}

export const SOCIALS_LOGIN = {
  [SocialType.Google]: {
    provider: GoogleAuthProvider,
    icon: GooglePlusCircleFilled,
  },
  [SocialType.Github]: {
    provider: GithubAuthProvider,
    icon: GithubFilled,
  },
};
