"use client";
import { FontFetchHeebo, FontFetchSans } from "@/app/fonts/fonts";
import Link from "next/link";
import {
  ImageOutlined,
  ArrowRightOutlined,
  RotateLeftOutlined,
  ChatOutlined
} from "@mui/icons-material";
import { useEffect, useState } from "react";
const Index = () => {
  const [state, setState] = useState("");
  const h = () => {
    setState("");
  };
  /*
  useEffect(() => {
    const pushModal = setInterval(() => {
      setState(`hello and welcome`);
    }, 12000);
    return () => [clearInterval(pushModal), console.log(`Cleared`)];
  }, []);
  useEffect(() => {
    if (state) {
      const timeOut = setTimeout(() => {
        h();
      }, 48000);
      return () => clearTimeout(timeOut);
    }
  }, [state]);
  */
  return (
    <>
      <div className="section_home">
        <div className="section_left">
          <div className="style_fn_title_holder">
            <div className={FontFetchHeebo.className}>
              <h1 className="title">
                Unleash Your Creativity with AI
              </h1>
              <p className="desc">
                Generate your ideas into stunning visuals
              </p>
            </div>
          </div>
          <div className="style_fn_interactive_list modern">
            <div className={FontFetchHeebo.className}>
              <ul>
                <li>
                  <div className="item">
                    <Link href="/image">
                      <span className="icon">
                        <ImageOutlined className="fn__svg" />
                      </span>
                      <h2 className="title">Image Generation</h2>
                      <p className="desc">
                        This field of AI combines deep learning
                        algorithms and generative models to create new
                        images that resemble real-world photographs or
                        exhibit creative and imaginative qualities.
                      </p>
                      <span className="arrow">
                        <ArrowRightOutlined className="fn__svg" />
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link href="/chat">
                      <span className="icon">
                        <ChatOutlined className="fn__svg" />
                      </span>
                      <h2 className="title">AI Chat Bot</h2>
                      <p className="desc">
                        An AI chatbot, short for artificial
                        intelligence chatbot, is a computer program
                        designed to simulate human-like conversations
                        and provide automated responses to user
                        queries or prompts.{" "}
                      </p>
                      <span className="arrow">
                        <ArrowRightOutlined className="fn__svg" />
                      </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section_right">
          <div className="company_info">
            {/*<img src="" alt="" />*/}
            <div className={FontFetchSans.className}>
              <h4 className="">Lorem ipsum</h4>
              <hr />
              {/*Logged in*/}
              <div className="fn__members">
                <div className="active item">
                  <span className="circle"></span>
                  <span className="text fade-in-bottom">Logged in</span>
                </div>
                {/*Logged out
                <div className="item">
                  <span className="circle"></span>
                  <span className="text">Logged out</span>
                </div>
                */}
                {/*Modal
                {state && (
                  <div className="active item">
                    <span className="circle " onClick={h}></span>
                    <span className="text fade-in-bottom">{state}</span>
                  </div>
                )}
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
