import clientApiAxios from '../../utils/client-api-axios.util';

const loginService = {
  login: async (email: string, password: string) => {
    const resp = await clientApiAxios
      .post('/auth', {
        email,
        password,
      })
      .then(({ data }) => data);
    localStorage.setItem('token', resp.token);
  },
};

export default loginService;
