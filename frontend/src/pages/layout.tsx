import { Outlet } from "react-router-dom";
import Footer from "../component/footer.tsx";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
