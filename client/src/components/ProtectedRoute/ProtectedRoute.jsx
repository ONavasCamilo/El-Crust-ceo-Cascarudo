import { Route, route } from "preact-router";
import { useEffect } from "preact/hooks"
import { userStore } from "@store/store";

const ProtectedRoute = ({ ...props }) => {
  const { user, loading } = userStore((state) => state);

  useEffect(() => {
    if (!user?.isLoggedIn && !loading) route("/login", true);
  }, [user.isLoggedIn, loading]);

  return <Route {...props} />;
}

export default ProtectedRoute