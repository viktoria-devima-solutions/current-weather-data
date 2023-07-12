import { useEffect, useState } from 'react';

interface User {
  id: number;
  email: string;
}

const useProfileCard = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user') as string);
    setUser(userData);
  }, []);
  return { user };
};
export default useProfileCard;
