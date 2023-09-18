import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analysis",
  description: "Pattern analysis section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}