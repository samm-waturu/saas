"use client";
import { FontFetchHeebo } from "@/app/fonts/fonts";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import ChatCompletionRequestMessage from "openai";
import ReactMarkdown from "react-markdown";
import FlipMove from "react-flip-move";
import axios from "axios";
import {
  SendOutlined,
  CheckOutlined,
  CloseOutlined
} from "@mui/icons-material";

function Chat() {
  const { user } = useUser();
  const userName = user?.firstName;
  const random = Math.floor(Math.random() * 2);
  const [prompts, setPrompts] = useState<
    ChatCompletionRequestMessage[]
  >([]);
  const feedRef = useRef(null);
  const feedContainerRef = useRef(null);
  useEffect(() => {
    if (feedContainerRef.current) {
      feedContainerRef.current.scrollTop =
        feedContainerRef.current.scrollIntoView({
          behavior: "smooth"
        });
    }
  }, [prompts]);
  const [value, setValue] = useState("");
  const [string, setString] = useState("");
  const [style, setStyle] = useState("");
  const [loading, setLoading] = useState("");
  const [type, setType] = useState("neww");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

   prompts.map((prompt) => {
    console.log(prompt)
  })
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
                  <div className="chat__box bot__chat" >
                    <div className="author">
                      <span>
                        {
                          // @ts-ignore
                          prompt?.role
                        }
                      </span>
                    </div>
                    <div className="chat" style={{ maxHeight: "500px", overflow: "auto"}}>
                      <ReactMarkdown>
                        {
                          // @ts-ignore
                          prompt?.content
                        }
                      </ReactMarkdown>
                    </div>
                  </div>
                )
              )}
            </FlipMove>
            <div ref={feedContainerRef}></div>
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
                async function post() {
                  try {
                    console.log("request sent");
                    const userPrompt: ChatCompletionRequestMessage = {
                      // @ts-ignore
                      role: "user",
                      content: strLength
                    };

                    const newPrompts = [...prompts, userPrompt];

                    const responseApi = await axios.post(
                      "/api/chat/",
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
                post();
                // setValue(`Prompt sent!`);
                setLoading("loading");
                setString("");
                router.refresh();
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
                autoFocus
                value={string}
                onChange={e => {
                  setString(e.target.value);
                }}
                placeholder="send prompt..."
                id="fn__chat_textarea"></textarea>

              <button>
                {loading == "loading" ? (
                  <>
                    {" "}
                    <div className="load-container fade-in-bck">
                      <div className="outer-ring">
                        <div className="inner-ring"></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <SendOutlined className="fn__svg fade-in-bck" />
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
                  Type a valid prompt!{" "}
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
          <span className="icon"></span>
          <span className="text">Dialogues</span>
        </a>
      </div>
      <div className="sidebar_content">
        <div className="chat__group new">
          <h2 className="group__title">Today</h2>
          <ul className="group__list">
            <li className="group__item">
              <div className="fn__chat_link active">
                <span className="text">Current Chat</span>
                <input type="text" value="Chat Bot Definition" />
                <span className="options">
                  <button className="trigger">
                    <span></span>
                  </button>
                  <span className="options__popup">
                    <span className="options__list">
                      <button className="edit">Edit</button>
                      <button className="delete ">Delete</button>
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
            <li className="group__item">
              <div className="fn__chat_link active">
                <span className="text">Other Chat topic</span>
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