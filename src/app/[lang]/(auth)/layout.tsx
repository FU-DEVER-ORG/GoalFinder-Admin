"use client";

import React, { useLayoutEffect } from "react";
import { redirect, usePathname } from "next/navigation";

import { useAppSelector } from "@/hooks";
import { routerProtected } from "@/settings";
import withAuth from "@/HOCs/withAuth";

import * as S from "@/styles/layouts/AuthStyled";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  //   const { isAuth } = useAppSelector((state) => state.auth);

  const isAuth = true;
  useLayoutEffect(() => {
    if (isAuth) {
      redirect("/user");
    }
  }, [isAuth]);

  if (routerProtected?.includes(pathName)) {
    const AuthWrappedComponent = withAuth(S.WrapAuthLayout);
    return <AuthWrappedComponent>{children}</AuthWrappedComponent>;
  }

  return <div>{children}</div>;
}
