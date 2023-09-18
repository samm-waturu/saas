import Footer from "@/components/dashboard/footer";
import Analysis from "@/components/generators/analysis";

export default function AnalysisLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_aichatbot_page fn__chatbot">
          <Analysis />
        </div>
      </div>
      <Footer />
    </div>
  );
}