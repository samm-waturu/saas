import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "image",
  description: "Image generation section"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
