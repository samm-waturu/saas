import Footer from "@/components/dashboard/footer";
import Pricing from "@/components/dashboard/pricing";
export default function PricingLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_pricing_page">
          <Pricing />
        </div>
      </div>
      <Footer />
    </div>
  );
}
