import { FontFetchHeebo } from "@/app/fonts/fonts";
import {
  SendOutlined,
  CheckOutlined,
  CloseOutlined
} from "@mui/icons-material";
const Code = () => {
  return (
    <div className={FontFetchHeebo.className}>
      <div className="chat__page">
        <div className="font__trigger">
          <span></span>
        </div>

        <div className="fn__title_holder">
          <div className="container">
            {/* Dynamic header */}
            <h1 className="title">Code Generator</h1>
          </div>
        </div>

        <div className="container" style={{ marginTop: "-48px" }}>
          <span className="hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ea iste nostrum suscipit veniam cum et natus veritatis
            facere, non commodi nisi cupiditate incidunt modi ipsam
          </span>
          <div className="chat__list">
            <div id="chat0" className="chat__item"></div>

            <div className="chat__item active" id="chat1">
              <div className="chat__box your__chat">
                <div className="author">
                  <span>You</span>
                </div>
                <div className="chat">
                  <p>React Modal</p>
                </div>
              </div>
              <div className="chat__box bot__chat">
                <div className="author">
                  <span>Bot</span>
                </div>
                <div className="chat">
                  <code>
                    Code here code here code here h1 ..... h2 ....
                  </code>
                </div>
              </div>
              <div className="chat__box your__chat">
                <div className="author">
                  <span>You</span>
                </div>
                <div className="chat">
                  <p>React Redux</p>
                </div>
              </div>
              <div className="chat__box bot__chat">
                <div className="author">
                  <span>Bot</span>
                </div>
                <div className="chat">
                  <code>
                    Code here code here code here h1 ..... h2 ....
                  </code>
                </div>
              </div>
              <div className="chat__box your__chat">
                <div className="author">
                  <span>You</span>
                </div>
                <div className="chat">
                  <p>UseEffect</p>
                </div>
              </div>
              <div className="chat__box bot__chat">
                <div className="author">
                  <span>Bot</span>
                </div>
                <div className="chat">
                  <code>
                    Code here code here code here h1 ..... h2 ....
                  </code>
                </div>
              </div>
              <div className="chat__box your__chat">
                <div className="author">
                  <span>You</span>
                </div>
                <div className="chat">
                  <p>useRef</p>
                </div>
              </div>
              <div className="chat__box bot__chat">
                <div className="author">
                  <span>Bot</span>
                </div>
                <div className="chat">
                  <code>
                    Code here code here code here h1 ..... h2 ....
                  </code>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="chat__comment">
          <div className="container">
            <div className="fn__chat_comment">
              <div className="new__chat">
                <p>
                  Ask it questions, engage in discussions, or simply
                  enjoy a friendly chat.
                </p>
              </div>
              <textarea
                rows="1"
                className="fn__hidden_textarea"
                tabindex="-1"></textarea>
              <textarea
                rows="1"
                placeholder="Send a message..."
                id="fn__chat_textarea"></textarea>
              <button>
                <SendOutlined className="fn__svg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="chat__sidebar">
        <div className="sidebar_header">
          <a
            href="ai-chat-bot.html#chat0"
            className="fn__new_chat_link">
            <span className="icon"></span>
            <span className="text">New Chat</span>
          </a>
        </div>
        <div className="sidebar_content">
          <div className="chat__group new">
            <h2 className="group__title">Today</h2>
            <ul className="group__list">
              <li className="group__item">
                <div className="fn__chat_link active" href="#chat1">
                  <span className="text">React modal</span>
                  <input type="text" value="React modal" />
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
                      <CloseOutlined alt="" className="fn__svg" />
                    </button>
                  </span>
                </div>
              </li>
              <li className="group__item">
                <div className="fn__chat_link" href="#chat2">
                  <span className="text">Modal with useEffect</span>
                  <input type="text" value="Modal with useEffect" />
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
              <li className="group__item">
                <div className="fn__chat_link" href="#chat3">
                  <span className="text">useRef and useMemo</span>
                  <input type="text" value="useRef and useMemo" />
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
              {/*     <li className="group__item">
                <div className="fn__chat_link" href="#chat4">
                  <span className="text">Business Ideas</span>
                  <input type="text" value="Business Ideas" />
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
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
