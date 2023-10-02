import React from "react";
import Logout from "../Auth/components/Logout";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Logout />
      Welcome to Home Page
    </>
  );
};
export default Home;
