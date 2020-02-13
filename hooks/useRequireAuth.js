import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

const useRequireAuth = (redirectUrl = '/auth/login') => {
  const auth = useAuth();
  const router = useRouter();

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.user === false) {
      router.push(redirectUrl);
    }
  }, [auth, redirectUrl, router]);

  return auth;
};

export default useRequireAuth;
