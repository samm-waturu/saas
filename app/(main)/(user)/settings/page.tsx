import Setting from "@/components/dashboard/settings";
import Footer from "@/components/dashboard/footer";

export default function Layout() {
  return (
    <>
      <div className="style_fn_content">
        <div className="style_fn_page">
          <div className="style_fn_user_settings_page">
            <Setting />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
