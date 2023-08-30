import Profile from "@/components/dashboard/profile";
import Footer from "@/components/dashboard/footer";

export default function Layout() {
  return (
    <>
      <div className="style_fn_content">
        <div className="style_fn_page">
          <div className="style_user_profile_page">
            <Profile prop={""} />
          </div>
        </div>
          <Footer />
      </div>
    </>
  );
}
