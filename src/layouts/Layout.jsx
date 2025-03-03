<<<<<<< HEAD
import { Outlet } from "react-router-dom";
=======
import { Outlet } from 'react-router-dom'

import { Footer } from '../common/components/Footer'
import { Header } from '../common/components/Header'
>>>>>>> d5e825246e61db688d50a2dd6e171167300f7ab0

const Layout = () => {
  return (
    <>
<<<<<<< HEAD
      <p>header</p>
      <main>
        <Outlet />
      </main>
      <p>footer</p>
    </>
  );
};

export default Layout;
=======
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
>>>>>>> d5e825246e61db688d50a2dd6e171167300f7ab0
