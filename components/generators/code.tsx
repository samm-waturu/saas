"use client";
import { FontFetchHeebo } from "@/app/fonts/fonts";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/nextjs";
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
  InfoOutlined,
  ClearAllOutlined,
  DeleteOutlined
} from "@mui/icons-material";

function Code() {
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
  const codeTags = [
    "",
    "HTML",
    "CSS",
    "Javascript",
    "Visual Basic",
    "Pascal",
    "C++",
    "C"
  ];
  const [option, setOption] = useState(codeTags[0]);
  const [hold, setHold] = useState("Write a popup modal in react...");
  const [copyState, setcopyState] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  /*  prompts.map((prompt) => {
    console.log(prompt)
  })*/
  console.log(prompts.slice(prompts.length - 1));
  return [
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
                  <div
                    className="chat"
                    style={{ maxHeight: "500px", overflow: "auto" }}>
                    <ReactMarkdown
                      components={{
                        pre: ({ node, ...props }) => (
                          <div
                            style={{ lineHeight: 2.4, padding: 24 }}>
                            <pre {...props} />
                          </div>
                        ),
                        code: ({ node, ...props }) => (
                          <code
                            style={{
                              fontSize: 14,
                              padding: 2,
                              borderLeft: "2px solid #7c5fe3"
                            }}
                            {...props}
                          />
                        )
                      }}>
                      {
                        // @ts-ignore
                        prompt?.content
                      }
                    </ReactMarkdown>

                    {/*run in external editor*/}

                    <span>
                      <a
                        href="https://onecompiler.com/"
                        target="_blank"
                        rel="noopener"
                        style={{
                          textDecoration: "none",
                          fontWeight: "bolder"
                        }}>
                        {" "}
                        Run in OneCompiler
                      </a>
                    </span>

                    {/*Using the imported component */}
                    <CopyToClipboard
                      text={prompt?.content}
                      onCopy={() => setcopyState(true)}>
                      {/* single child to which event is applied*/}

                      <div style={{ marginTop: "10px" }}>
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
                Want some code snippets for your project? Feel free to
                ask it!.
              </p>
            </div>
            <form
              onSubmit={handleSubmit((data: any, e: any) => {
                const strLength = new String(data.textarea);
                async function post() {
                  setHold("Sending...");
                  try {
                    console.log("hello");
                    const userPrompt: ChatCompletionRequestMessage = {
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
                    setHold("Write a popup modal in react...");
                    setType("");
                    setLoading("");
                  } catch (error: any) {
                    console.log(error);
                    setHold("Write a popup modal in react...");
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
                tabindex="-1"></textarea>
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
        <a className="fn__new_chat_link">
          <QuestionMarkOutlined className="icon" />
          <span className="text">Code dialogues</span>
        </a>
      </div>

      <div className="sidebar_content">
        <div className="chat__group new">
          <h2 className="group__title">
            Specify Language type
            <span
              style={{ padding: 5 }}
              className="fn__tooltip"
              title="Type of programming language">
              <InfoOutlined sx={{ fontSize: "14px" }} />
            </span>
          </h2>
          <ul className="group__list" style={{maxHeight: "100px", overflow: "auto"}} >
            <li className="group__item">
              <input type="checkbox" id="" value={option} name="" /> {" "}
              <label for=""><span className="chkbox">General</span></label>
            </li>
            <li className="group__item">
              <input
                type="checkbox"
                id="HTML"
                value={codeTags[1]}
                name="HTML"
              />
              {" "}
              <label for="HTML"><span className="chkbox">HTML</span></label>
            </li>
            <li className="group__item">
              <input
                type="checkbox"
                id="CSS"
                value={codeTags[2]}
                name="CSS"
              />
              {" "}
              <label for="CSS"><span className="chkbox">CSS</span></label>
            </li>
            <li className="group__item">
              <input
                type="checkbox"
                id="Javascript"
                value={codeTags[3]}
                name="Javascript"
              />
            </li>
            <li className="group__item">
              <input
                type="checkbox"
                id="Visual Basic"
                value={codeTags[4]}
                name="Visual Basic"
              />
              {" "}
              <label for="Visual Basic"><span className="chkbox">visual basic</span></label>
            </li>
            <li className="group__item">
              <input
                type="checkbox"
                id="Pascal"
                value={codeTags[5]}
                name="Pascal"
              />
              {" "}
              <label for="Pascal"><span className="chkbox">Pascal</span></label>
            </li>
            <li className="group__item">
              <input
                type="checkbox"
                id="C++"
                value={codeTags[6]}
                name="C plus plus"
              />
              {" "}
              <label for="C plus plus"><span className="chkbox">C++</span></label>
            </li>
            <li className="group__item">
              <input
                type="checkbox"
                id="C"
                value={codeTags[7]}
                name="C"
              />
              {" "}
              <label for="C"><span className="chkbox">C</span></label>
            </li>
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
                      {/*{<DeleteOutlined sx={{ fontSize: "18px", marginRight: "6px"}}
                      onClick ={e => {setPrompts([])}} />}*/}
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
            <Button color="error" variant="contained" size="large" onClick={e => {
                  setPrompts([]);

                }}>
            Clear dialogues
            </Button>
          </div>
        </div>

        {/* <div className="chat__group new" >
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
export default Code;
