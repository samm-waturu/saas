import Footer from "@/components/dashboard/footer";
import Chat from "@/components/generators/chat";

export default function ChatLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
       
          <Chat />
        
      </div>
      <Footer />
    </div>
  );
}
