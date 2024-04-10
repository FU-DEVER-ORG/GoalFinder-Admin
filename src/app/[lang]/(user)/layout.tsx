import AdminLayout from "@/layout/AdminLayout";
import React from "react";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {

  //custom user layout here
  return <AdminLayout>{children}</AdminLayout>;
}
