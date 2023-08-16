import { auth, db } from "@/config/firebase";
import routes from "@/routes/routes";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const withAuth = () => (WrappedComponent) => {
  const router = useRouter();

  const RoleCheck = async (props) => {
    // const { role } = router.query; // Assuming role is passed as a query parameter or fetched from the user session
    console.log("pathname", router.pathname);
    const route = routes.find((e) => e.path === router.pathname);
    console.log("route", route);
    // const user = await onAuthStateChanged(auth, (user) => {
    //   return <WrappedComponent {...props} />;
    // });

    const respose = await (await fetch("/api/currentUser")).json();

    console.log("user", respose);
    // const { role } = router.query; // Assuming role is passed as a query parameter or fetched from the user session

    // if (!allowedRoles.includes(role)) {
    //   // Redirect or show an error message
    //   router.push('/unauthorized');
    //   return null;
    // }

    return <WrappedComponent {...props} />;
  };

  return RoleCheck;
};

export default withAuth;
