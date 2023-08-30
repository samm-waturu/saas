import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "video",
  description: "video generation section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
