import Footer from '../Footer/Footer';
type EmptyLayoutProps = {
  children: React.ReactNode;
};
const EmptyLayout = ({ children }: EmptyLayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default EmptyLayout;
