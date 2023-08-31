import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "sign-in",
  description: "sign-in generation section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
