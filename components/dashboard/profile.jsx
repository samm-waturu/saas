import Image from "next/image";
import Link from "next/link";
import { FontFetchHeebo, FontFetchSans } from "@/app/fonts/fonts";
import { SettingsOutlined } from "@mui/icons-material";
import placeHolderLarge from "@/public/img/placeholder/placeholder_large.png";

const Profile = ({prop}) => {
  return (
    <>
      <div className="style_fn_pagetitle">
        <div className={FontFetchSans.className}>
          <h2 className="title">User Profile</h2>
        </div>
      </div>

      <div className="container small">
        <div className="style_fn_user_profile">
          <div className="user__profile">
            {/*profile SSR*/}
            <div className="user_avatar">
              <Image src={!prop ? placeHolderLarge : null} alt="" />
            </div>
            <div className="user_details">
              <div className={FontFetchHeebo.className}>
                <ul>
                  <li>
                    <div className="item">
                      <h4 className="subtitle">Name</h4>
                      <h3 className="title">Caden Smith</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4 className="subtitle">Username</h4>
                      <h3 className="title">@caddeomyth</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4 className="subtitle">Email Address</h4>
                      <h3 className="title">cadensmith@gmail.com</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/settings" className="user_edit fn__icon_button">
              <SettingsOutlined className="fn__svg" />
            </Link>
          </div>

          {/*plans SSR*/}
          <div className="user__plan">
            <div className="plan_left">
              <div className={FontFetchSans.className}>
                <h4 className="subtitle">Your Plan</h4>
              </div>
              <div className={FontFetchHeebo.className}>
                <p className="info">
                  <span>Personal Plan</span>
                </p>
              </div>
            </div>
            <div className="plan_right">
              <div className={FontFetchHeebo.className}>
                <Link href="/billing" className="token_upgrade style_fn_button">
                  <span>Upgrade</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
