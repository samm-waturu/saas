import Footer from "@/components/dashboard/footer";
import Video from "@/components/generators/video";

export default function ImageLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_image_generation_page">
          <Video prop={""} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
