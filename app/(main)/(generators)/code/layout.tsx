import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code",
  description: "Code generation section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
