import Footer from "@/components/dashboard/footer";
import Code from "@/components/generators/code";

export default function ChatLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_aichatbot_page fn__chatbot">
          <Code />
        </div>
      </div>
      <Footer />
    </div>
  );
}
