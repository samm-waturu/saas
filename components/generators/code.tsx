"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ChatCompletionRequestMessage from "openai";
import { useUser } from "@clerk/nextjs";
import { FontFetchHeebo } from "@/app/fonts/fonts";
// import FlipMove from "react-flip-move";
import axios from "axios";
import {
  SendOutlined,
  CheckOutlined,
  CloseOutlined
} from "@mui/icons-material";

function Code() {
  const { user } = useUser();
  if (!user) {
    return null;
  }
  const userName = user?.firstName;
  // console.log(user?.firstName)
  const random = Math.floor(Math.random() * 2);
  // console.log(random);
  const router = useRouter();
  const [value, setValue] = useState("");
  const [string, setString] = useState("");
  const [style, setStyle] = useState("");
  const [loading, setLoading] = useState("");

  const [prompts, setPrompts] = useState<
    ChatCompletionRequestMessage[]
  >([]);
  const [type, setType] = useState("neww");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  return (
    <>
      <div className="chat__page">
        <div className="font__trigger">
          <span></span>
        </div>

        <div className="fn__title_holder">
          <div className="container">
            <h1 className="title">Code generator</h1>
          </div>
        </div>

        <div className="container">
          <div className="chat__list ">
            <div id="chat0" className="chat__item"></div>
            <div className="chat__item active" id="chat1"></div>

            {/*<div className="chat__item" id="chat2"></div>

            <div className="chat__item" id="chat3"></div>

            <div className="chat__item" id="chat4"></div> */}
          </div>
        </div>

        <div className="chat__comment">
          <div className="container">
            <div className={`fn__chat_comment ${type}`}>
              <div className="new__chat">
                <p>
                  Want some code snippets for your project? Feel free
                  to ask it!.
                </p>
              </div>
              <form
                onSubmit={handleSubmit((data: any, e: any) => {
                  const strLength = new String(data.textarea);
                  async function post() {
                    try {
                      console.log("hello");
                      const userPrompt: ChatCompletionRequestMessage =
                        {
                          // @ts-ignore
                          role: "user",
                          content: strLength
                        };

                      const newPrompts = [...prompts, userPrompt];

                      const responseApi = await axios.post(
                        "/api/code",
                        {
                          prompts: newPrompts
                        }
                      );
                      setPrompts(current => [
                        ...current,
                        userPrompt,
                        responseApi.data
                      ]);
                      setType("");
                      setLoading("");
                    } catch (error: any) {
                      console.log(error);
                      setType("neww");
                      setLoading("");
                    }
                  }
                  if (strLength.length > 0 && strLength.length < 20) {
                    setValue(`Type a lengither prompt!`);
                    setStyle(`fade-in-bottom`);

                    const timer = setTimeout(() => {
                      setValue("");
                      setStyle("");
                    }, 4000);
                    // console.log("Check on your prompt length");
                  } else if (
                    strLength.length > 20 &&
                    strLength.length < 40
                  ) {
                    post();
                    setValue(
                      `Prompt sent! Be more descriptive though`
                    );
                    setLoading("loading");
                    post();
                    setStyle(`fade-in-bottom`);
                    const timer = setTimeout(() => {
                      setValue("");
                      setStyle("");
                    }, 4000);
                    setLoading("loading");
                    setString("");
                  } else if (strLength.length > 40) {
                    console.log(data, strLength.length),
                      setLoading("loading");
                    post();
                    // setValue(`Prompt sent!`);
                    setStyle(`fade-in-bottom`);
                    const timer = setTimeout(() => {
                      setValue("");
                      setStyle("");
                    }, 4000);
                    setLoading("loading");
                    setString("");
                  }
                })}>
                <textarea
                  // @ts-ignore
                  rows="1"
                  className="fn__hidden_textarea"
                  // @ts-ignore
                  tabIndex="-1"></textarea>
                <textarea
                  // @ts-ignore
                  rows="1"
                  {...register("textarea", { required: true })}
                  value={string}
                  onChange={e => {
                    setString(e.target.value);
                  }}
                  placeholder="Write me a pop up modal in react..."
                  id="fn__chat_textarea"></textarea>

                <button>
                  <SendOutlined className="fn__svg" />
                </button>
                {loading == "loading" && (
                  <>
                    {" "}
                    <div className="load-container">
                      <div className="outer-ring">
                        <div className="inner-ring"></div>
                      </div>
                    </div>
                  </>
                )}
              </form>
            </div>
            <div
              className={FontFetchHeebo.className}
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
                  <span className={`${style} fade-in-bottom`}>
                    {value}{" "}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
        <>
          <span
            className="hidden"
            style={{ marginTop: -15, padding: 0 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ea iste nostrum suscipit veniam cum et natus veritatis
            facere
          </span>
        </>
      </div>
      <div className="chat__sidebar">
        <div className="sidebar_header">
          <a href="" className="fn__new_chat_link">
            <span className="icon"></span>
            <span className="text">New Chat</span>
          </a>
        </div>
        <div className="sidebar_content">
          <div className="chat__group new">
            <h2 className="group__title">Today</h2>
            <ul className="group__list">
              <li className="group__item">
                <div className="fn__chat_link active">
                  <span className="text">current chat</span>
                  <input type="text" value="Chat Bot Definition" />
                  <span className="options">
                    <button className="trigger">
                      <span></span>
                    </button>
                    <span className="options__popup">
                      <span className="options__list">
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                      </span>
                    </span>
                  </span>
                  <span className="save_options">
                    <button className="save">
                      <CheckOutlined className="fn__svg" />
                    </button>
                    <button className="cancel">
                      <CloseOutlined className="fn__svg" />
                    </button>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Code;
