import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase/clientApp';

const withAuth = (children: ReactNode) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/login');
        }
      });
      return () => unsubscribe();
    }, [router]);

    return <>{children}</>

};

export default withAuth;
