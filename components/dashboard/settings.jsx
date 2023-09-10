import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import { FontFetchHeebo, FontFetchSans } from "@/app/fonts/fonts";

const Setting = () => {
  return (
    <div className={FontFetchHeebo.className}>
      <div className="style_fn_pagetitle">
        <h2 className="title">Settings</h2>
      </div>
      <div className="container small">
        <div className="style_fn_user_settings">
          <form>
            <div className="user__settings">
              {/* Left settings field */}
             
              {/* Right settings field */}
              <div className="settings_right">
                <div className="item">
                  <label className="input_label" for="name">
                    Name
                  </label>
                  <div className="input_item">
                    <input
                      className="input"
                      type="text"
                      id="name"
                      value="Caden Smith"
                    />
                  </div>
                </div>
                <div className="item">
                  <label className="input_label" for="username">
                    Username
                  </label>
                  <div className="input_item">
                    <span className="email">@</span>
                    <input
                      className="input"
                      type="text"
                      id="username"
                      value="caddeomyth"
                    />
                  </div>
                </div>
                <div className="item">
                  <label className="input_label" for="email">
                    Email Address
                  </label>
                  <div className="input_item">
                    <input
                      className="input"
                      type="text"
                      id="email"
                      value="cadensmith@gmail.com"
                    />
                  </div>
                </div>
                <div className="item">
                  <label className="input_label" for="password">
                    Password
                  </label>
                  <div className="input_item">
                    <input
                      className="input"
                      type="password"
                      id="password"
                      value="lqbjSA34a!bh1"
                    />
                  </div>
                </div>
                <div className="item">
                  <label className="fn__checkbox">
                    <input type="checkbox" />I approve all changes
                    <span className="checkmark"></span>
                    {/* <img src="svg/check.svg" alt="" className="fn__svg" /> */}
                  </label>
                </div>
                <div className="item">
                  <label className="fn__submit">
                    <input type="submit" value="Save Changes" />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
