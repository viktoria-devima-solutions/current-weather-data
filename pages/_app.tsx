import { Provider } from 'react-redux';

import { Layouts } from '../src/components/layouts/Layouts';
import { wrapper } from '../src/redux/store';

import type { MyAppProps } from '../src/components/layouts/types';

function App({ Component, ...rest }: MyAppProps) {
  const Layout = Layouts?.[Component?.Layout ?? 'Empty'] ?? ((page) => page);
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}
export default App;
