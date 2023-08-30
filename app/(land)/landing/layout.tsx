import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing",
  description: "landing page"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
