import Billing from "@/components/dashboard/billing";
import Footer from "@/components/dashboard/footer";

export default function Layout() {
  return (
      <div className="style_fn_content">
        <div className="style_user_billing_page">
          <Billing />
        </div>
        <Footer />
      </div>
  );
}
