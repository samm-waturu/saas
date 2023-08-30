import Footer from "@/components/dashboard/footer";
import Privacy from "@/components/dashboard/privacy";
export default function PrivacyLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_privacy_page">
          <Privacy />
        </div>
      </div>
      <Footer />
    </div>
  );
}
