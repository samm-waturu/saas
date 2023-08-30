import Footer from "@/components/dashboard/footer";
import Audio from "@/components/generators/audio";

export default function ImageLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_image_generation_page">
          <Audio prop={""} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
