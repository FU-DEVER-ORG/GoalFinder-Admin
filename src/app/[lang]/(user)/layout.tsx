import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  //custom user layout here
  return <div>{children}</div>;
}
