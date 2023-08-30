import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "audio",
  description: "audio generation section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
