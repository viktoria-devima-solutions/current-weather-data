import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useQueryState = () => {
  const router = useRouter();
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    router.push(
      {
        pathname: '',
        query: { search: debouncedSearch },
      },
      '',
    );
  }, [debouncedSearch, router]);
  return { setDebouncedSearch };
};

export default useQueryState;
