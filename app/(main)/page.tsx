import Footer from "@/components/dashboard/footer";
import Index from "@/components/dashboard/index";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard section"
};
export default function ContactLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_contact_page">
          <Index />
        </div>
      </div>
      <Footer />
    </div>
  );
}
