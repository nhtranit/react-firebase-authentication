import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZeLzJ6vEtjOPdjNoA6B7pggwcXEELVPY",
  authDomain: "go-chat-ba537.firebaseapp.com",
  projectId: "go-chat-ba537",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const fireabseApp = initializeApp(firebaseConfig);
const auth: any = getAuth(fireabseApp);

export { auth };
