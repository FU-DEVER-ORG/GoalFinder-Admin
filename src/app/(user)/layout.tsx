import { redirect } from "next/navigation";
import AdminLayout from "@/layout/AdminLayout";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";
import { useAppSelector } from "@/hooks";
import { RootState } from "@/store";
import { useLayoutEffect } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { checkToken } from "@/utils/checkToken";

export default async function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getCookie("next_token", { cookies });

  console.log("token", token);
  const isAuth = await checkToken(token);

  if (!isAuth) {
    redirect("sign-in");
  }

  return <AdminLayout>{children}</AdminLayout>;
}
