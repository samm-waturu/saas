import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications",
  description: "All notifications"
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}