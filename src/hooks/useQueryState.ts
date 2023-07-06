import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useQueryState = (paramName: string) => {
  const router = useRouter();
  const [value, setValue] = useState(router.query[paramName] as string);

  useEffect(() => {
    router.push(
      {
        query: { [paramName]: value },
      },
      '',
    );
  }, [value, router, paramName]);
  return { value, setValue };
};

export default useQueryState;
