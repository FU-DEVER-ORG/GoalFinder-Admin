import AdminLayout from "@/components/core/layout/AdminLayout";
import { checkToken } from "@/utils/checkToken";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getCookie("next_token", { cookies });

  const isAuth = await checkToken(token);

  if (!isAuth) {
    redirect("sign-in");
  }

  return <AdminLayout>{children}</AdminLayout>;
}
