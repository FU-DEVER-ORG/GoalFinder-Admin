import { redirect } from "next/navigation";

import AdminLayout from "@/layout/AdminLayout";

const simulateLoginCheck = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isLoggedIn = true;
      resolve(isLoggedIn);
    }, 2000);
  });
};

export const checkLogin = async () => {
  try {
    const isLoggedIn = await simulateLoginCheck();
    return isLoggedIn;
  } catch (error) {
    console.error("Error during login check:", error);
    return false;
  }
};

export default async function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await checkLogin();

  if (!isAuth) {
    redirect("/sign-in");
  }
  return <AdminLayout>{children}</AdminLayout>;
}
