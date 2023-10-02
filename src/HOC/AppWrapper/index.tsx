import React, { useEffect } from "react";
import { isLogged } from "src/utils/authen.util";
interface AppWrapperProps {
  children?: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  useEffect(() => {
    isLogged()
      .then(([err, idtoken]) => {
        console.log(err, idtoken);
      })
      .catch((err) => {
        console.log(1111);
      });
  }, []);

  return <>{children}</>;
};
export default AppWrapper;
