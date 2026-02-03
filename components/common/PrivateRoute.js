import { useEffect } from "react";
import { useRouter } from "next/router";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token, redirect to login
      router.push("/admin/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;
