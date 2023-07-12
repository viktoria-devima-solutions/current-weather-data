import LoginForm from '../../src/components/forms/LoginForm/LoginForm';

import type { MyPage } from '../../src/components/layouts/types';

const LoginPage: MyPage = () => {
  return <LoginForm />;
};
export default LoginPage;
LoginPage.Layout = 'Empty';
