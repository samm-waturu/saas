"use client";
import { FontFetchHeebo } from "@/app/fonts/fonts";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import ChatCompletionRequestMessage from "openai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactMarkdown from "react-markdown";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Button } from "@mui/material";
import FlipMove from "react-flip-move";
import axios from "axios";
import {
  SendOutlined,
  CheckOutlined,
  ContentCopyOutlined,
  CloseOutlined,
  QuestionMarkOutlined,
  InfoOutlined
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
  const [hold, setHolder] = useState("what is operator overload...")
  const [copyState, setcopyState] = useState(false);
  const lecOptions = [
    "",
    "(With strict reference to System analysis and design (SAD) topics)",
    "(With strict reference to Database management system (DBMS) topics)",
    "(With strict reference to Object oriented programming (OOP) topics)",
    "(With strict reference to Computer applications)",
    "(With strict reference to Microsoft Visual basic)"
  ];
  const [option, setOption] = useState(lecOptions[0]);
  console.log(option);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  /*  prompts.slice(0, 1).map(prompt => {
    console.log(prompt?.content);
  });*/
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
                  <div
                    className="chat__box your__chat"
                    key={prompt?.content}>
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
                  <div
                    className="chat__box bot__chat"
                    key={prompt?.content}>
                    <div className="author">
                      <span>
                        {
                          // @ts-ignore
                          prompt?.role
                        }
                      </span>
                    </div>
                    <div
                      className="chat"
                      style={{
                        maxHeight: "500px",
                        overflow: "auto"
                      }}>
                      <ReactMarkdown>
                        {
                          // @ts-ignore
                          prompt?.content
                        }
                      </ReactMarkdown>
                      {/*Using the imported component */}
                      <CopyToClipboard
                        text={prompt?.content}
                        onCopy={() => setcopyState(true)}>
                        {/* single child to which event is applied*/}

                        <div className="copy-area">
                          {/*button to copy text */}
                          <Button variant="contained">
                            <ContentCopyOutlined
                              sx={{ fontSize: "16px" }}
                            />
                          </Button>
                        </div>
                      </CopyToClipboard>
                      {/*  Snackbar that shows when the text is copied*/}
                      <Snackbar
                        style={{ marginTop: 120 }}
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
            <div ref={feedContainerRef}></div>
          </div>
          {/*<div className="chat__item" id="chat2"></div>

          <div className="chat__item" id="chat3"></div>

          <div className="chat__item" id="chat4"></div>*/}
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
                const strLength = new String(
                  `${data.textarea} ${option}`
                );
                async function post() {
                  try {

                    setHolder("sending...")

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

                    // console.log(userPrompt)

                    setType("");
                    setLoading("");
                    setHolder("what is operator overload...")
                  } catch (error: any) {
                    console.log(error);
                    setHolder("what is operator overload...")
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
                placeholder={hold}
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
          <QuestionMarkOutlined className="icon" />
          <span className="text">Questions</span>
        </a>
      </div>

      <div className="sidebar_content">
        <div className="chat__group new">
          <h2 className="group__title">
            Choose your Lecture
            <span
              style={{ padding: 5 }}
              className="fn__tooltip"
              title="Choose your unit">
              <InfoOutlined sx={{ fontSize: "14px" }} />
            </span>
          </h2>
          <ul className="group__list">
            <select
              name=""
              id=""
              defaultValue={option}
              onChange={e => {
                setOption(event.target.value);
              }}>

              <option value={lecOptions[1]}>
                <li className="group__item">
                  <div className="fn__chat_link ">
                    <span className="text">
                      System analysis & design
                    </span>
                  </div>
                </li>{" "}
              </option>
              <option value={lecOptions[2]}>
                <li className="group__item">
                  <div className="fn__chat_link ">
                    <span className="text">
                      Database management sys...
                    </span>
                  </div>
                </li>{" "}
              </option>
              <option value={lecOptions[3]}>
                <li className="group__item">
                  <div className="fn__chat_link ">
                    <span className="text">
                      Object oriented progra...
                    </span>
                  </div>
                </li>{" "}
              </option>
              <option value={lecOptions[4]}>
                <li className="group__item">
                  <div className="fn__chat_link ">
                    <span className="text">
                      Computer applications
                    </span>
                  </div>
                </li>{" "}
              </option>
              <option value={lecOptions[5]}>
                <li className="group__item">
                  <div className="fn__chat_link ">
                    <span className="text">
                      Microsoft Visual basic
                    </span>
                  </div>
                </li>{" "}
              </option>
              <option value={lecOptions[0]}>
                 <li className="group__item">
                  <div className="fn__chat_link ">
                    <span className="text">
                      General chat
                    </span>
                  </div>
                </li>{" "}
              </option>
            </select>
          </ul>
        </div>
        <div
          className="chat__group new"
          style={{
            maxHeight: "800px",
            overflow: "auto",
            marginTop: "20px"
          }}>
          <h2 className="group__title">
            Today's queries
            <span
              style={{ padding: 5 }}
              className="fn__tooltip"
              title="The questions you've asked today ">
              <InfoOutlined sx={{ fontSize: "14px" }} />
            </span>
          </h2>
          <ul className="group__list">
            {prompts.map(prompt =>
              prompt?.role == "user" ? (
                <li className="group__item">
                  <div className="fn__chat_link">
                    <span className="text">{prompt?.content}</span>
                    <span className="options">
                      <CopyToClipboard
                        text={prompt?.content}
                        onCopy={() => setcopyState(true)}>
                        {/* single child to which event is applied*/}

                        <ContentCopyOutlined
                          sx={{ fontSize: "16px" }}
                        />
                      </CopyToClipboard>
                    </span>
                  </div>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
          <div className="clear_btn">
            <Button color="error" variant="contained" size="large" onClick={e => {setPrompts([]);}}>
            Clear dialogues
            </Button>
          </div>
        </div>

        {/* <div className="chat__group new" style={{ marginTop: "20px" }}>
          <h2 className="group__title" >Default state</h2>
            <ul>
                <li className="group__item">
              <div className="fn__chat_link ">
                <span className="text">
                  Basic chat
                </span>
              </div>
            </li>
            </ul>

        </div>*/}
      </div>
    </div>
  ];
}

export default Chat;