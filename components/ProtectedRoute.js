import { useEffect } from "react";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || (allowedRoles && !allowedRoles.includes(role))) {
      router.push("/login"); // Redirect to login if no token
    }
  }, [router, allowedRoles, role]);

  return children; // Render children if token exists
};

export default ProtectedRoute;


//Wrap Admin Routes with ProtectedRoute
//Example of AdminPage
//import ProtectedRoute from "@/components/ProtectedRoute";
//wrap the page with <ProtectedRoute></ProtectedRoute>
//role based access control can be implemented as 
/* <ProtectedRoute allowedRoles={['admin']}> */