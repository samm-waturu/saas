import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pricing plans",
  description: "Pricing plans"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
