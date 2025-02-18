import { Outlet } from "react-router-dom";
import { CallbackModal } from "../components/CallbackModal";


const Layout = () => {
  return (
    <>
      <p>header</p>
      <main>
        <CallbackModal />
        <Outlet />
      </main>
      <p>footer</p>
    </>
  );
};

export default Layout;
