import { Button } from "antd";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "src/configs/firebase";
interface LogoutProps {}
const Logout: React.FC<LogoutProps> = () => {
  const logout = async () => {
    await signOut(auth);
  };

  return <Button onClick={logout}>Logout</Button>;
};

export default Logout;
