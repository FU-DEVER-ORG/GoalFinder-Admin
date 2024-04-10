import { redirect } from "next/navigation";
import { checkLogin } from "../(user)/layout";

export default async function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await checkLogin();

  if (isAuth) {
    redirect("/");
  }

  return <div>{children}</div>;
}
