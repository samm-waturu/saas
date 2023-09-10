"use client";
import {
  InfoOutlined,
  DownloadOutlined,
  TuneOutlined
} from "@mui/icons-material";
import Image from "next/image";
import { FontFetchHeebo } from "@/app/fonts/fonts";
import { useState } from "react";
import { useForm } from "react-hook-form";
import placeHolder from "@/public/img/placeholder/placeholder.png";
import audioplaceHolder from "@/public/img/placeholder/audioplaceholder.jpg";

const Audio = ({ prop }) => {
  const [value, setValue] = useState("");
  const [string, setString] = useState("");
  const [style, setStyle] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  return (
    <div className={FontFetchHeebo.className}>
      <div className="generation_page">
        {/* Generating phase */}

        <div className="generation_header">
          <div className="header_top">
            <h1 className="title">Audio Generation</h1>
            <div className="setup">
              <p className="info">Tune</p>
              <a href="#" className="sidebar__trigger ">
                <TuneOutlined className="fn__svg" />
              </a>
            </div>
          </div>
          {/* Where user types prompts */}
          <div className="header_bottom">
            <form
               onSubmit={handleSubmit((data, e) => {
                  const strLength = new String(data.textarea);
                  if (strLength.length > 0 && strLength.length < 20) {
                    setValue(
                      `Type a lengither prompt and ensure it's valid`
                    );
                    setStyle(`fade-in-bottom`);

                    const timer = setTimeout(() => {
                      setValue("");
                      setStyle("");
                    }, 4000);
                    console.log("Check on your prompt length");
                  } else if (
                    strLength.length > 20 &&
                    strLength.length < 40
                  ) {
                    setValue(
                      `Ensure you are more descriptive on your next prompt`
                    );
                    setStyle(`fade-in-bottom`);
                    const timer = setTimeout(() => {
                      setValue("");
                      setStyle("");
                    }, 4000);
                    setString("");
                    console.log(data, strLength.length),
                      e.preventDefault();
                  } else if (strLength.length > 40) {
                    console.log(data, strLength.length),
                      e.preventDefault();
                    setString("");
                  }
              })}>
              <div className="include_area">
                <textarea
                  id="fn__include_textarea"
                  rows="1"
                  {...register("textarea", { required: true })}
                  value={string}
                  placeholder="describe your audio"
                  onChange={e => {
                    setString(e.target.value);
                  }}></textarea>
                <textarea
                  className="fn__hidden_textarea"
                  rows="1"
                  tabindex="-1"></textarea>
              </div>
              <div className="generate_section">
                <button style={{ padding: 14 }}>
                  <span>Generate</span>
                </button>
              </div>
            </form>
          </div>
         <div
              className={""}
              style={{ marginTop: 2, marginBottom: -4 }}>
              {errors.textarea && (
                <p
                  style={{
                    fontWeight: "bold",
                    paddingTop: 1,
                    marginBottom: -4,
                    color: "rebeccapurple"
                  }}>
                  <span className={"fade-in-bottom"}>
                    A decent prompt is required{" "}
                  </span>
                </p>
              )}

              {value && (
                <p
                  className={"text-blur-out"}
                  style={{
                    fontWeight: "bold",
                    color: "rebeccapurple"
                  }}>
                  <span className={`${style} fade-in-bottom`}>{value} </span>
                </p>
              )}
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
                        <span className="text">192Kbps</span>
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
                      <Image src={audioplaceHolder} alt="" />
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
                                <a href="#">Original audio</a>
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
                                <a href="#">Delete audio</a>
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
                <div className="generation_more">
                <a href="pricing.html" className="style_fn_button medium"><span>Previous Generations</span></a>
                </div>
               */}
        </div>
      </div>

      {/* Sidebar section */}
      <div className="side">
        <div class="generation__sidebar">
          <div class="sidebar_model">
            <div class="fn__select_model">
              <a class="model_open">
                <Image
                  class="user_img"
                  src={!prop && placeHolder}
                  alt=""
                />
                <div class="author">
                  <h4 class="subtitle">Model</h4>
                  <h3 class="title">openAI</h3>
                </div>
              </a>
            </div>
          </div>
          <div class="sidebar_details">
            <div class="number_of_images">
              <h4 class="title">
                Number of audios
                <span
                  class="fn__tooltip"
                  title="Only one audio per request">
                  <InfoOutlined className="fn__svg" />
                </span>
              </h4>
              <div class="fn__quantity">
                <input
                  type="number"
                  max="5"
                  min="1"
                  placeholder="2"
                  disabled
                />
              </div>
            </div>
            <div class="img_sizes">
              <h4 class="title">
                Audio Bitrate
                <span
                  class="fn__tooltip"
                  title="Refers to the audio quality in Kbps">
                  <InfoOutlined className="fn__svg" />
                </span>
              </h4>
              <div class="img_size_select">
                <select disabled>
                  <option value="512_512" selected>
                    192Kbps
                  </option>
                  <option value="320">320Kbps</option>
                  <option value="220">220Kbps</option>
                  <option value="192">192Kbps</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audio;