import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
