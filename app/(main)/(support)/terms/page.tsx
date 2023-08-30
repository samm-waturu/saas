import Footer from "@/components/dashboard/footer";
import Terms from "@/components/dashboard/terms";
export default function PrivacyLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_privacy_page">
          <Terms />
        </div>
      </div>
      <Footer />
    </div>
  );
}
