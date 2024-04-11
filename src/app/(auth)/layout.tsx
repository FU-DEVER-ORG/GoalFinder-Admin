import { redirect } from "next/navigation";
import { useAppSelector } from "@/hooks";
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

  const isAuth = await checkToken(token);

  if (isAuth) {
    redirect("/");
  }

  return <div>{children}</div>;
}
