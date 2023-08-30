import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing",
  description: "billing section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
