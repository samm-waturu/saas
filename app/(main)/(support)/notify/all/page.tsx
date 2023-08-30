import Footer from "@/components/dashboard/footer";
import AllNote from "@/components/dashboard/notifications/all";
export default function NotificationLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_notifications_page">
          <AllNote />
        </div>
      </div>
      <Footer />
    </div>
  );
}
