import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
