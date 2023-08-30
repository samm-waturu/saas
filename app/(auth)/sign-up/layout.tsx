import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sign-up",
  description: "sign-up generation section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
