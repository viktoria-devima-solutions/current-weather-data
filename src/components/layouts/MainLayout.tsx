import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

import type { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
