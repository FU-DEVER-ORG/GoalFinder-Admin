'use client'
import { redirect } from "next/navigation";
import { useAppSelector } from "@/hooks";
import { useLayoutEffect } from "react";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const {isAuth} = useAppSelector((state) => state.auth);
  useLayoutEffect(() => {
    if(isAuth) {
      redirect("/")
    }
  }, [isAuth])

  return <div>{children}</div>;
}
