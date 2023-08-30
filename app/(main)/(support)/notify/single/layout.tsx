import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications",
  description: "single notification"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
