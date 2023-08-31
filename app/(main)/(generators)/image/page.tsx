import Footer from "@/components//dashboard/footer";
import Img from "@/components/generators/image";

export default function ImageLayout() {
  return (
    <div className="style_fn_content">
      <div className="style_fn_page">
        <div className="style_fn_image_generation_page">
          <Img prop={""} num={1} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
