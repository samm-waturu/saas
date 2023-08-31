"use client";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  AttachMoneyOutlined,
  AudiotrackOutlined,
  ChatBubbleOutline,
  CloseOutlined,
  CodeOutlined,
  DarkModeOutlined,
  FaceOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  HomeOutlined,
  ImageOutlined,
  LightModeOutlined,
  LogoutOutlined,
  NotificationsOutlined,
  SupportOutlined,
  SyncAltOutlined,
  TranslateOutlined,
  VideocamOutlined
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "@/components/dashboard/head";
import { usePathname } from "next/navigation";
import { FontFetchHeebo, FontFetchSans } from "../fonts/fonts";
export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // State tweaks here
  const [state, setState] = useState(false);
  // const [style, setStyle] = useState(``);
  const pathname = usePathname();
  // custom constants here
  const p = [
    "/image",
    "/video",
    "/audio",
    "/chat",
    "/pricing",
    "/contact",
    "/privacy",
    "/faq",
    "/profile",
    "/",
    "/code",
    "/terms"
  ];

  // useEffect
  useEffect(() => {
    const e = () => {
      typeof document !== undefined
        ? require("@/utils/js/loader")
        : null;
      typeof document !== undefined
        ? require("@/utils/js/plugin")
        : null;
      typeof document !== undefined
        ? require("@/utils/js/init")
        : null;
      setState(true);
      console.log(
        `Script mounted + you are on ${pathname} page section ${p[3]}`
      );
    };
    e();
    return () => {
      // no unmounts
    };
  });
  return (
    <>
      <div className="style_fn_fixedsub">
        <ul></ul>
      </div>
      {pathname == p[3] ||
        pathname == p[10] ? (
          <div className="style_fn_font">
            <a className="font__closer_link fn__icon_button" href="#">
              <CloseOutlined className="fn__svg" />
            </a>
            <div className="font__closer"></div>
            <div className="font__dialog">
              <h3 className="title">Font Options</h3>
              <label htmlFor="font_size">Font Size</label>
              <select id="font_size">
                <option value="10">10 px</option>
                <option value="12">12 px</option>
                <option value="14">14 px</option>
                <option value="16" selected>
                  16 px
                </option>
                <option value="18">18 px</option>
                <option value="20">20 px</option>
                <option value="22">22 px</option>
                <option value="24">24 px</option>
                <option value="26">26 px</option>
                <option value="28">28 px</option>
              </select>
              <a href="#" className="apply style_fn_button">
                <span>Apply</span>
              </a>
            </div>
          </div>
        ): `no jsx element`}
      <div
        className={`style_fn_wrapper  ${
          pathname == p[0] ||
          pathname == p[1] ||
          pathname == p[2] ||
          pathname == p[3] ||
          pathname == p[10]
            ? `fn__has_sidebar`
            : ``
        }`}>
        <div className={`style_fn_wrap`}>
          {/*HEADER*/}
          <div className={FontFetchHeebo.className}>
            <header className="style_fn_header">
              <div className="header__left">
                <div className="fn__token_info">
                  <span className="token_summary">
                    <span className="count">120</span>
                    <span className="text">
                      Tokens
                      <br />
                      Remain
                    </span>
                  </span>
                  <Link
                    href="/billing"
                    className="token_upgrade style_fn_button">
                    <span>Upgrade</span>
                  </Link>
                  <div className="token__popup">
                    Resets in <span>19 hours.</span>
                    <br />
                    Daily limit is <span>200 tokens</span>
                  </div>
                </div>
              </div>
              <div className="header__right">
                <div className="fn__nav_bar">
                  <div className="bar__item bar__item_notification has_notification">
                    <a href="" className="item_opener">
                      <NotificationsOutlined className="fn__svg" />
                    </a>
                    <div className="item_popup">
                      <div className="ntfc_header">
                        <h2 className="ntfc_title">Notifications</h2>
                        <a href="/notify/all">View All</a>
                      </div>
                      <div className="ntfc_list">
                        <ul>
                          <li>
                            <p>
                              <a href="/notify/single">
                                Version 4.1.2 has been launched
                              </a>
                            </p>
                            <span>34 Min Ago</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bar__item bar__item_language">
                    <a href=" " className="item_opener">
                      <TranslateOutlined className="fn__svg" />
                    </a>
                    <div className="item_popup">
                      <ul>
                        <li>
                          <span className="active">English</span>
                        </li>
                        <li>
                          <a href="">Swahili</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bar__item bar__item_skin">
                    <a href=" " className="item_opener">
                      <LightModeOutlined className="fn__svg light_mode" />
                      <DarkModeOutlined className="fn__svg dark_mode" />
                    </a>
                    <div className="item_popup"></div>
                  </div>
                  <div className="bar__item bar__item_fullscreen">
                    <a href=" " className="item_opener">
                      <FullscreenOutlined className="fn__svg f_screen" />
                      <FullscreenExitOutlined className="fn__svg s_screen" />
                    </a>
                  </div>
                  {state ? (
                    <div className="bar__item bar__item_mount">
                      <a href=" " className="item_opener">
                        <SyncAltOutlined
                          className="fn__svg"
                          style={{ color: " 72d105" }}
                        />
                      </a>
                    </div>
                  ) : (
                    <div className="bar__item bar__item_mount">
                      <a href=" " className="item_opener">
                        <SyncAltOutlined
                          className="fn__svg"
                          style={{ color: " dd0404" }}
                        />
                      </a>
                    </div>
                  )}
                  <Head prop={""} />
                </div>
              </div>
            </header>
          </div>
          {/*HEADER*/}

          {/*LEFT PANEL*/}
          <div className={FontFetchHeebo.className}>
            <div className="style_fn_leftpanel">
              <div className="mobile_extra_closer"></div>

              <div className="leftpanel_logo">
                <a href="" className="fn_logo">
                  <span className="full_logo"></span>
                  <span className="short_logo"></span>
                </a>
                <a
                  href="#"
                  className="fn__closer fn__icon_button desktop_closer">
                  <ArrowRightOutlined className="fn__svg" />
                </a>
                <a
                  href="#"
                  className="fn__closer fn__icon_button mobile_closer">
                  <ArrowRightOutlined className="fn__svg" />
                </a>
              </div>

              <div className="leftpanel_content">
                <div className="nav_group">
                  <div className={FontFetchSans.className}>
                    <h2 className="group__title">Start Here</h2>
                  </div>
                  <ul className="group__list">
                    <li>
                      <Link
                        href="/"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Home">
                        <span
                          className={`icon ${
                            pathname == p[9] && `icon_color`
                          }`}>
                          <HomeOutlined className="fn__svg" />
                        </span>
                        <span className="text">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/profile"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Profile">
                        <span
                          className={`icon ${
                            pathname == p[8] && `icon_color`
                          }`}>
                          <FaceOutlined className="fn__svg" />
                        </span>
                        <span className="text">Profile</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="nav_group">
                  <div className={FontFetchSans.className}>
                    <h2 className="group__title">User tools</h2>
                  </div>
                  <ul className="group__list">
                    <li>
                      <Link
                        href="/image"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Generates Images">
                        <span
                          className={`icon ${
                            pathname == p[0] && `icon_color`
                          }`}>
                          <ImageOutlined className="fn__svg" />
                        </span>
                        <span className="text">Image</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/video"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Generates videos">
                        <span
                          className={`icon ${
                            pathname == p[1] && `icon_color`
                          }`}>
                          <VideocamOutlined className="fn__svg" />
                        </span>
                        <span className="text">Video</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/audio"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Generates audio">
                        <span
                          className={`icon ${
                            pathname == p[2] && `icon_color`
                          }`}>
                          <AudiotrackOutlined className="fn__svg" />
                        </span>
                        <span className="text">Audio</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/chat"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Chat with bot">
                        <span
                          className={`icon ${
                            pathname == p[3] && `icon_color`
                          }`}>
                          <ChatBubbleOutline className="fn__svg" />
                        </span>
                        <span className="text">Chat</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Generates code">
                        <span
                          className={`icon ${
                            pathname == p[10] && `icon_color`
                          }`}>
                          <CodeOutlined className="fn__svg" />
                        </span>
                        <span className="text">Code</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav_group">
                  <h2 className="group__title">Need Help?</h2>
                  <ul className="group__list">
                    {/* <li>
                        <Link
                          href="/pricing"
                          className="fn__tooltip menu__item"
                          data-position="right"
                          title="Pricing">
                          <span
                            className={`icon ${
                              pathname == p[4] && `icon_color`
                            }`}>
                            <AttachMoneyOutlined className="fn__svg" />
                          </span>
                          <span className="text">Pricing</span>
                        </Link>
                      </li> */}

                    <li className="menu-item-has-children">
                      <Link
                        href=""
                        className="fn__tooltip menu__item"
                        data-position="right">
                        <span className={`icon`}>
                          <SupportOutlined className="fn__svg" />
                        </span>
                        <span className={`text`}>Support</span>
                        <span className="trigger">
                          <ArrowLeftOutlined className="fn__svg" />
                        </span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/contact">
                            <span
                              className={`text ${
                                pathname == p[5] && `icon_color`
                              }`}>
                              Contact
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pricing">
                            <span
                              className={`text ${
                                pathname == p[4] && `icon_color`
                              }`}>
                              Pricing
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy">
                            <span
                              className={`text ${
                                pathname == p[6] && `icon_color`
                              }`}>
                              Privacy
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/terms">
                            <span
                              className={`text ${
                                pathname == p[11] && `icon_color`
                              }`}>
                              Terms
                            </span>
                          </Link>
                        </li>
                        {/* <li>
                          <a href="">
                            <span className="text">
                              Changelog
                              <span className="fn__sup">(4.1.2)</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="text">Contact Us</span>
                          </a>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="/sign-in"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Log Out">
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
          </div>

          {/*LEFT PANEL*/}
          {children}
        </div>
      </div>
    </>
  );
}
