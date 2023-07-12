import Footer from '../Footer/Footer';

import type { PropsWithChildren } from 'react';

const EmptyLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default EmptyLayout;
