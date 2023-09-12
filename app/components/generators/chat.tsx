"use client";
import { useForm } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChatCompletionRequestMessage from "openai";
import { storeResponse } from "@/lib/store";
import { useUser } from "@clerk/nextjs";
import { FontFetchHeebo } from "@/app/fonts/fonts";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FlipMove from "react-flip-move";
import axios from "axios";
import {
  SendOutlined,
  CheckOutlined,
  CloseOutlined
} from "@mui/icons-material";
import { TextField, Button, MuiAlert, Snackbar } from "@mui/material";

function Chat() {
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
  const [copyState, setcopyState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  console.log("hello");
  return [
    <div className="chat__page">
      <div className="font__trigger">
        <span></span>
      </div>

      <div className="fn__title_holder">
        <div className="container">
          <h1 className="title">Chat with bot</h1>
        </div>
      </div>

      <div className="container">
        <div className="chat__list ">
          <div id="chat0" className="chat__item"></div>
          <div className="chat__item active" id="chat1">
            <FlipMove>
              {prompts.map(prompt =>
                // @ts-ignore
                prompt?.role == "user" ? (
                  <div className="chat__box your__chat">
                    <div className="author">
                      <span>{userName}</span>
                    </div>
                    <div className="chat">
                      <p>
                        {
                          // @ts-ignore
                          prompt?.content
                        }
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="chat__box bot__chat">
                    <div className="author">
                      <span>
                        {
                          // @ts-ignore
                          prompt?.role
                        }
                      </span>
                    </div>
                    <div className="chat">
                      <p>
                        {
                          // @ts-ignore
                          prompt?.content
                        }
                      </p>
                      {/*Using the imported component */}
                      <CopyToClipboard
                        text={prompt?.content}
                        onCopy={() => setcopyState(true)}>
                        {/* single child to which event is applied*/}

                        <div className="copy-area">
                          {/*button to copy text */}
                          <Button variant="contained">
                            Click to Copy
                          </Button>
                        </div>
                      </CopyToClipboard>
                      {/*  Snackbar that shows when the text is copied*/}
                      <Snackbar
                        // invoke snack bar when open is true
                        open={copyState}
                        // close after three seconds
                        autoHideDuration={3000}
                        // function called after three seconds
                        onClose={() => setcopyState(false)}
                        // where the snack bar must be shown
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center"
                        }}>
                        <MuiAlert
                          // function called by clicking the close icon
                          onClose={() => setcopyState(false)}
                          // color of snack bar
                          severity="success"
                          sx={{ width: "100%" }}>
                          Copied Text
                        </MuiAlert>
                      </Snackbar>
                    </div>
                  </div>
                )
              )}
            </FlipMove>
          </div>

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
                Ask it questions, engage in discussions, or simply
                enjoy a friendly chat.
              </p>
            </div>
            <form
              onSubmit={handleSubmit((data: any, e: any) => {
                const strLength = new String(data.textarea);
                /*
                if (strLength.length > 0 && strLength.length < 1) {
                  setValue(`Type a lengither prompt!`);
                  setStyle(`fade-in-bottom`);
                  const timer = setTimeout(() => {
                    setValue("");
                    setStyle("");
                  }, 5000);
                  // console.log("Check on your prompt length");
                }
                */

                async function post() {
                  try {
                    console.log("hello");
                    const userPrompt: ChatCompletionRequestMessage = {
                      // @ts-ignore
                      role: "user",
                      content: strLength
                    };

                    const newPrompts = [...prompts, userPrompt];

                    const responseApi = await axios.post(
                      "/api/chat",
                      {
                        prompts: newPrompts
                      }
                    );
                    setPrompts(current => [
                      ...current,
                      userPrompt,
                      responseApi.data
                    ]);

                    console.log(userPrompt.content);

                    /*if(!prompt){
                      const response = prompts.slice(0, 1).map((prompt) => {
                      await storeResponse(userPrompt.content, )
                    })
                    }*/
                    setType("");
                    setLoading("");
                  } catch (error: any) {
                    console.log(error);
                    setType("neww");
                    setLoading("");
                  }
                }
                post();
                // setValue(`Prompt sent!`);
                setLoading("loading");
                setString("");
                setStyle(`fade-in-bottom`);
                const timer = setTimeout(() => {
                  setValue("");
                  setStyle("");
                }, 5000);
                router.refresh();
              })}>
              <textarea
                // @ts-ignore
                rows="1"
                className="fn__hidden_textarea"
                tabindex="-1"></textarea>
              <textarea
                // @ts-ignore
                rows="1"
                {...register("textarea", { required: true })}
                value={string}
                onChange={e => {
                  setString(e.target.value);
                }}
                placeholder="what was donald's trump first..."
                id="fn__chat_textarea"></textarea>

              <button>
                {loading == "loading" ? (
                  <>
                    {" "}
                    <div className="load-container">
                      <div className="outer-ring">
                        <div className="inner-ring"></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <SendOutlined className="fn__svg" />
                )}
              </button>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          iste nostrum suscipit veniam cum et natus veritatis facere
        </span>
      </>
    </div>,
    <div className="chat__sidebar">
      <div className="sidebar_header">
        <a href="" className="fn__new_chat_link">
          {/* <span className="icon"></span> */}
          <span className="text">Previous dialogues</span>
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
  ];
}

export default Chat;