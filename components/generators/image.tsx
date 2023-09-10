"use client";
import {
  HelpOutlineOutlined,
  InfoOutlined,
  DownloadOutlined,
  ScaleOutlined,
  SendOutlined,
  RefreshOutlined,
  TuneOutlined
} from "@mui/icons-material";
import Image from "next/image";
import { FontFetchHeebo } from "@/app/fonts/fonts";
import placeHolder from "@/public/img/placeholder/placeholder.png";
import imageplaceHolder from "@/public/img/placeholder/imageplaceholder.jpg";
import { useState } from "react";
import FlipMove from "react-flip-move";
import axios from "axios";
import { useForm } from "react-hook-form";

const Img = ({ prop }) => {
  const [images, setImages] = useState<string[]>([]);
  const random = Math.floor(Math.random() * 2);
  const [value, setValue] = useState("");
  const [string, setString] = useState("");
  const [loading, setLoading] = useState("");
  const [style, setStyle] = useState("");
  const resOptions = ["256x256", "512x512", "1024x1024"];
  const [option, setOption] = useState(resOptions[1]);
  const [quantity, setQuantity] = useState(1);
  const [max, setMax] = useState("");
  const [len, setLen] = useState("");
  // console.log(quantity, option);

  images.map(url => {
    url.map(src => {
      console.log(src.url);
    });
  });

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
            <h1 className="title">Image Generation</h1>
            <div className="setup">
              <p className="info">Options</p>
              <a href="#" className="sidebar__trigger">
                <TuneOutlined className="fn__svg" />
              </a>
            </div>
          </div>
          {/* Where user types prompts */}
          <div className="header_bottom">
            <form
              onSubmit={handleSubmit((data: any, e: any) => {
                const strLength = new String(data.textarea);
                if (quantity > 5) {
                  setMax("image limit is 5!");
                  const timer = setTimeout(() => {
                    setMax("");
                  }, 7000);
                } else if (
                  strLength.length > 0 &&
                  strLength.length < 20
                ) {
                  setLen("Try to be more descriptive");
                  const timer = setTimeout(() => {
                    setLen("");
                  }, 7000);
                } else {
                  const allValues = {
                    prompt: strLength,
                    amount: quantity,
                    resolution: option
                  };
                  async function post() {
                    try {
                      console.log("request sent");
                      // console.log(allValues);

                      // setImages([]);
                      const responseApi = await axios.post(
                        "/api/image/",
                        allValues
                      );

                      setImages(current => [
                        ...current,
                        responseApi.data
                      ]);
                      /* setImages([responseApi.data]);
                     console.log(responseApi.data)
                     console.log(urls)*/
                      setLoading("");
                    } catch (error: any) {
                      console.log(error);
                      setLoading("");
                    }
                  }
                  post();
                  // setValue(`Prompt sent!`);
                  setLoading("loading");
                  setString("");
                }

                // router.refresh();
              })}>
              <div className="include_area">
                <textarea
                  id="fn__include_textarea"
                  rows="1"
                  {...register("textarea", { required: true })}
                  value={string}
                  placeholder="describe your image"
                  autoFocus
                  onChange={e => {
                    setString(e.target.value);
                  }}></textarea>
                <textarea
                  className="fn__hidden_textarea"
                  rows="1"
                  tabIndex="-1"></textarea>
              </div>

              <div className="generate_section">
                <div>
                  {loading == "loading" ? (
                    <button
                      style={{
                        paddingLeft: 18,
                        paddingRight: 18,
                        paddingTop: 8,
                        paddingBottom: 8
                      }}>
                      <span className="dot ping"></span>
                    </button>
                  ) : (
                    <button style={{ padding: 14 }}>
                      <span>Send</span>
                    </button>
                  )}
                </div>
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
                  A valid input is required{" "}
                </span>
              </p>
            )}
          </div>
          <div
            className={""}
            style={{ marginTop: 2, marginBottom: -4 }}>
            {max && (
              <p
                style={{
                  fontWeight: "bold",
                  paddingTop: 1,
                  marginBottom: -4,
                  color: "rebeccapurple"
                }}>
                <span className={"fade-in-bottom"}>{max}</span>
              </p>
            )}
          </div>
          <div
            className={""}
            style={{ marginTop: 2, marginBottom: -4 }}>
            {len && (
              <p
                style={{
                  fontWeight: "bold",
                  paddingTop: 1,
                  marginBottom: -4,
                  color: "rebeccapurple"
                }}>
                <span className={"fade-in-bottom"}>{len}</span>
              </p>
            )}
          </div>
        </div>

        <div className="generation_history">
          <div className="fn__generation_item">
            <div className="item_header">
              <div className="title_holder">
                <h2 className="prompt_title"></h2>
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
                        <span className="text">Dimension</span>
                      </li>
                      <li>
                        <span className="text">March 15, 2023</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Extra options to manipulate images  */}
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
                {images.map(url =>
                  url.map(src => (
                    <li className="fn__gl_item">
                      <div className="fn__gl__item">
                        <div className="abs_item">
                          <Image src={src.url} alt="" fill />
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
                                    <a href="#">Original Image</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* Enhanced upscale features   */}
                            <div className="fn__icon_options medium_size">
                              <a href="#" className="fn__icon_button">
                                <ScaleOutlined className="fn__svg" />
                              </a>
                              <div className="fn__icon_popup">
                                <ul>
                                  <li>
                                    <a href="#">HD Upscale</a>
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
                                    <a href="#">Delete Image</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>

          {/*  {images.map((objs) => {
                objs.map((src) => (
                  <Image src={src.url} fill alt="" />
                  ))
              })}*/}

          {/* {images.map(url =>
            url.map(src => <Image fill src={src.url} alt="" />)
          )}*/}

          {/* 
                <div className="generation_more">
                <a href="pricing.html" className="style_fn_button medium"><span>Previous Generations</span></a>
                </div>
               */}
        </div>
      </div>

      {/* After Generation */}

      {/* Sidebar section */}
      <div className="side">
        <div className="generation__sidebar">
          <div className="sidebar_model">
            <div className="fn__select_model">
              <a className="model_open">
                {/*                <Image
                  className="user_img"
                  src={!prop && placeHolder}
                  alt=""
                />*/}
                <div className="author">
                  <h4 className="subtitle">Options</h4>
                  {/*<h3 className="title">openAI</h3>*/}
                </div>
              </a>
            </div>
          </div>
          <div className="sidebar_details">
            <div className="number_of_images">
              <h4 className="title">
                Number of Images
                <span
                  className="fn__tooltip"
                  title="Max of five images per request">
                  <InfoOutlined className="fn__svg" />
                </span>
              </h4>
              <div className="fn__quantity">
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={e => {
                    [setQuantity(e.target.value)];
                  }}
                  max="5"
                  min={quantity}
                />
              </div>
              {/*{max && <p>{max}</p>}*/}
            </div>
            <div className="img_sizes">
              <h4 className="title">
                Image Dimensions
                <span
                  className="fn__tooltip"
                  title="Dimension refers width & height ">
                  <InfoOutlined className="fn__svg" />
                </span>
              </h4>
              <div className="img_size_select">
                <select
                  defaultValue={option}
                  onChange={e => {
                    setOption(event.target.value);
                  }}>
                  <option value={resOptions[0]}>256 by 256</option>
                  <option value={resOptions[1]}>512 by 512</option>
                  {/*<option value={resOptions[2]}>768 by 768 </option>*/}
                  <option value={resOptions[2]}>1024 by 1024 </option>
                  {/*<option value=>1024 x 1024 px</option>*/}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Img;