import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";


const Layout = () => {
  return (
    <>
      <p>header</p>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
