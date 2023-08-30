import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
  description: "Chat generation section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
