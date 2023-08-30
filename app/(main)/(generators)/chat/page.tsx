import Footer from "@/components/dashboard/footer";
import Chat from "@/components/generators/chat";

export default function ChatLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_aichatbot_page fn__chatbot">
          <Chat />
        </div>
      </div>
      <Footer />
    </div>
  );
}
