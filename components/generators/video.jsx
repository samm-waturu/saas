import {
  HelpOutlineOutlined,
  InfoOutlined,
  DownloadOutlined,
  ScaleOutlined,
  RefreshOutlined,
  TuneOutlined
} from "@mui/icons-material";
import Image from "next/image";
import { FontFetchHeebo } from "@/app/fonts/fonts";
import placeHolder from "@/public/img/placeholder/placeholder.png";
import videoplaceHolder from "@/public/img/placeholder/videoplaceholder.jpg";

const Video = ({ prop }) => {
  return (
    <div className={FontFetchHeebo.className}>
      <div className="generation_page">
        {/* Generating phase */}

        <div className="generation_header">
          <div className="header_top">
            <h1 className="title">Video Generation</h1>
            <div className="setup">
              <p className="info">Tune</p>
           
                <a
                  href="#"
                  className="sidebar__trigger ">
                  <TuneOutlined className="fn__svg" />
                </a>
             
            </div>
          </div>
          {/* Where user types prompts */}
          <div className="header_bottom">
            <div className="include_area">
              <textarea id="fn__include_textarea" rows="1"></textarea>
              <textarea
                className="fn__hidden_textarea"
                rows="1"
                placeholder="describe your video"
                tabindex="-1"></textarea>
            </div>
            {/* Negative prompts 
            <div className="exclude_area">
              <textarea id="fn__exclude_textarea" rows="1"></textarea>
              <textarea
                className="fn__hidden_textarea"
                rows="1"
                tabindex="-1"></textarea>
            </div>
            */}
            <div className="generate_section">
              {/* Negative prompt section & generation button */}
              {/* 
                    <label className="fn__toggle">
                      <span className="t_in">
                        <input type="checkbox" checked id="negative_prompt" />
                        <span className="t_slider"></span>
                        <span className="t_content"></span>
                      </span>
                      Negative Prompt
                    </label>
                  */}
              <a
                id="generate_it"
                href="#"
                className="style_fn_button">
                <span>Generate</span>
              </a>
            </div>
          </div>
        </div>

        {/* After Generation */}

        <div className="generation_history">
          <div className="fn__generation_item">
            <div className="item_header">
              <div className="title_holder">
                <h2 className="prompt_title">
                  What will be prompted by the user
                </h2>
                {/* <p className="negative_prompt_title">negative prompts</p> */}
              </div>
              <div className="item_options">
                <div className="fn__icon_options medium_size align_right">
                  <a href="#" className="fn__icon_button">
                    <InfoOutlined className="fn__svg" />
                  </a>
                  {/* Image generated details such as date */}
                  <div className="fn__icon_popup">
                    <ul>
                      <li>
                        <span className="text">540p</span>
                      </li>
                      <li>
                        <span className="text">March 15, 2023</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="fn__icon_options medium_size align_right">
                  <a href="#" className="fn__icon_button">
                    <span className="dots"></span>
                  </a>
                  <div className="fn__icon_popup">
                    <ul>
                      <li>
                        <a href="#">Copy Prompt</a>
                      </li>
                      <li className="high_priorety">
                        <a href="#">Delete All</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Generated images */}
            <div className="item_list">
              <ul className="fn__generation_list">
                <li className="fn__gl_item">
                  <div className="fn__gl__item">
                    <div className="abs_item">
                      <Image src={videoplaceHolder} alt="" />
                      <div className="all_options">
                        {/* download generated image */}
                        <div className="fn__icon_options medium_size">
                          <a href="#" className="fn__icon_button">
                            <DownloadOutlined className="fn__svg" />
                          </a>
                          {/* Modify generated image */}
                          <div className="fn__icon_popup">
                            <ul>
                              <li>
                                <a href="#">Original video</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="fn__icon_options medium_size">
                          <a href="#" className="fn__icon_button">
                            <span className="dots"></span>
                          </a>
                          <div className="fn__icon_popup">
                            <ul>
                              <li className="high_priorety">
                                <a href="#">Delete Video</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 
			<div className="generation_more"><a href="pricing.html" className="style_fn_button medium"><span>Previous Generations</span></a></div>
			*/}
        </div>
      </div>

      {/* Sidebar section */}
      <div className="side">
        <div className="generation__sidebar">
          <div className="sidebar_model">
            <div className="fn__select_model">
              <a className="model_open">
                <Image
                  className="user_img"
                  src={!prop && placeHolder}
                  alt=""
                />
                <div className="author">
                  <h4 className="subtitle">Model</h4>
                  <h3 className="title">openAI</h3>
                </div>
              </a>
            </div>
          </div>
          <div className="sidebar_details">
            <div className="number_of_images">
              <h4 className="title">
                Number of videos
                <span
                  className="fn__tooltip"
                  title="Only one video per request">
                  <InfoOutlined className="fn__svg" />
                </span>
              </h4>
              <div className="fn__quantity">
                <input
                  type="number"
                  max="5"
                  min="1"
                  placeholder="2"
                  disabled
                />
              </div>
            </div>
            <div className="img_sizes">
              <h4 className="title">
                Video pixel
                <span
                  className="fn__tooltip"
                  title="Available pixel-per-inch (PPI) is 360p ">
                  <InfoOutlined className="fn__svg" />
                </span>
              </h4>
              <div className="img_size_select">
                <select disabled>
                  <option value="512_512" selected>
                    540p
                  </option>
                  <option value="360">360p</option>
                  <option value="540">540p</option>
                  <option value="720">720p</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
