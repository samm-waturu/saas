import Link from "next/link";
const autoDate = new Date().getFullYear();
import { FontFetchSans } from "@/app/fonts/fonts";

const Footer = () => {
  return (
    <>
      <footer className="style_fn_footer">
        <div className="style_fn_footer_content">
          <div className="copyright">
            <div className={FontFetchSans.className}>
              <p>
                <span>{`${autoDate}`}</span>

                <span>&nbsp;</span>

                {/* 
                <a href="github.com" style={{ textDecoration: "none" }}>
                  <span style={{ fontWeight: "bolder", fontSize: 12 }}>サム</span>
                </a>
                 */}
              </p>
            </div>
          </div>
          <div className="menu_items">
            <div className={FontFetchSans.className}>
              <ul>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
