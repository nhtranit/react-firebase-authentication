import { Unsubscribe, onAuthStateChanged } from "firebase/auth";
import { auth } from "src/configs/firebase";

export const isLogged = async () => {
  const currentUser = auth.currentUser;
  if (currentUser) return [false, currentUser.getIdToken()];

  // Not Logged in

  return new Promise<any[]>((resolve, reject) => {
    const timmer = setTimeout(() => {
      reject([true, null]);
    }, 10000);

    const scription: Unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return reject([true, null]);

      const token = await user.getIdToken();
      resolve([false, token]);
      clearTimeout(timmer);
      scription();
    });
  });
};
