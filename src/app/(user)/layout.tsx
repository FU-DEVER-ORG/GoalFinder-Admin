'use client'
import { redirect } from "next/navigation";
import AdminLayout from "@/layout/AdminLayout";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";
import { useAppSelector } from "@/hooks";
import { RootState } from "@/store";
import { useLayoutEffect } from "react";

export default  function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const {isAuth} = useAppSelector((state) => state.auth);
  useLayoutEffect(() => {
    if(!isAuth) {
      redirect("/sign-in")
    }
  }, [isAuth])
  return <AdminLayout>{children}</AdminLayout>;
}
