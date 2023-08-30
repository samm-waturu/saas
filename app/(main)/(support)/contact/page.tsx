import Footer from "@/components/dashboard/footer";
import Contact from "@/components/dashboard/contact";
export default function ContactLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_contact_page">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
