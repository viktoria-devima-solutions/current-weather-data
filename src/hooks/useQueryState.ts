import { useRouter } from 'next/router';

const useQueryState = (paramName: string) => {
  const router = useRouter();

  const setValue = (val: string) => {
    router.push(
      {
        query: { [paramName]: val },
      },
      '',
    );
  };
  return { value: router.query[paramName]?.toString() || '', setValue };
};

export default useQueryState;
