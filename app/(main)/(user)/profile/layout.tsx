import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
