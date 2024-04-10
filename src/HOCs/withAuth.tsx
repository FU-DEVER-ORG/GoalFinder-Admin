'use client';

import React, { useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAppSelector } from '@/hooks';

export default function withAuth<P extends React.HTMLAttributes<HTMLElement>>(
  Component: React.ComponentType<P>,
) {
  const WrapperComponent = (props: P) => {
    // const { isAuth } = useAppSelector((state) => state.auth);
    const isAuth = true;
    useLayoutEffect(() => {
      if (!isAuth) {
        redirect('/auth/sign-in');
      }
    }, [isAuth]);

    return <Component {...props} />;
  };

  return WrapperComponent;
}
