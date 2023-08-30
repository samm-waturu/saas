import {
  LogoutOutlined,
  MoneyOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import holder from "@/public/img/placeholder/placeholder.png";
const Head = ({ prop }) => {
  return (
    <>
      <div className="bar__item bar__item_user">
        <a href="" className="user_opener">
          <Image src={prop == "" ? holder : ""} alt="Demo" />
        </a>
        <div className="item_popup">
          <div className="user_profile">
            <div className="user_img">
              <Image src={prop == "" ? holder : ""} alt="Demo" />
            </div>
            <div className="user_info">
              <h2 className="user_name">
                Caden Smith<span>Free</span>
              </h2>
              <p>
                <a
                  href="mailto:cadmail@gmail.com"
                  className="user_email">
                  cadmail@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="user_nav">
            <ul>
              <li>
                <Link href="/profile">
                  <span className="icon">
                    <Image
                      src={prop == "" ? holder : ""}
                      alt="Demo"
                      className="fn__svg"
                    />
                  </span>
                  <span className="text">Profile</span>
                </Link>
              </li>
              <li>
                <Link href="/settings">
                  <span className="icon">
                    <SettingsOutlined className="fn__svg" />
                  </span>
                  <span className="text">Settings</span>
                </Link>
              </li>
              <li>
                <Link href="/billing">
                  <span className="icon">
                    <MoneyOutlined className="fn__svg" />
                  </span>
                  <span className="text">Billing</span>
                </Link>
              </li>
              <li>
                <Link href="/sign-in">
                  <span className="icon">
                    <LogoutOutlined className="fn__svg" />
                  </span>
                  <span className="text">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Head;
