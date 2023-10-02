import React, { useEffect, useRef } from "react";

// hooks
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./configs/firebase";

// routes
import AppRoutes from "./App.routes";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const refLocationPath = useRef(location.pathname);

  useEffect(() => {
    const subscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        return navigate("/");
        // ...
      } else if (!["/sign-up", "/login"].includes(refLocationPath.current)) {
        return navigate("/login");
      }
    });

    return () => {
      subscription();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
