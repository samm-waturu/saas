import Footer from "@/components/dashboard/footer";
import SingleNote from "@/components/dashboard/notifications/single";
export default function NotificationLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_notifications_page">
          <SingleNote />
        </div>
      </div>
      <Footer />
    </div>
  )
}