import { FontFetchHeebo } from "@/app/fonts/fonts";
import {
  SendOutlined,
  CheckOutlined,
  CloseOutlined
} from "@mui/icons-material";
const Chat = () => {
  return (
    <div className={FontFetchHeebo.className}>
      <div className="chat__page">
        <div className="font__trigger">
          <span></span>
        </div>

        <div className="fn__title_holder">
          <div className="container">
            {/* Dynamic header */}
            <h1 className="title">Chat Bot </h1>
          </div>
        </div>

        <div className="container">
          <div className="chat__list">
            <div id="chat0" className="chat__item"></div>

            <div className="chat__item active" id="chat1">
              <div className="chat__box your__chat">
                <div className="author">
                  <span>You</span>
                </div>
                <div className="chat">
                  <p>What is a chat bot?</p>
                </div>
              </div>
              <div className="chat__box bot__chat">
                <div className="author">
                  <span>Bot</span>
                </div>
                <div className="chat">
                  <p>
                    At the most basic level, a chatbot is a computer
                    program that simulates and processes human
                    conversation (either written or spoken), allowing
                    humans to interact with digital devices as if they
                    were communicating with a real person. Chatbots
                    can be as simple as rudimentary programs that
                    answer a simple query with a single-line response,
                    or as sophisticated as digital assistants that
                    learn and evolve to deliver increasing levels of
                    personalization as they gather and process
                    information.
                  </p>
                </div>
              </div>
              <div className="chat__box your__chat">
                <div className="author">
                  <span>You</span>
                </div>
                <div className="chat">
                  <p>How do chatbots work?</p>
                </div>
              </div>
              <div className="chat__box bot__chat">
                <div className="author">
                  <span>Bot</span>
                </div>
                <div className="chat">
                  <p>
                    Chatbots boost operational efficiency and bring
                    cost savings to businesses while offering
                    convenience and added services to internal
                    employees and external customers. They allow
                    companies to easily resolve many types of customer
                    queries and issues while reducing the need for
                    human interaction.
                  </p>
                </div>
              </div>
            </div>

            {/* 
                
            
								<div className="chat__item" id="chat2"></div>

								<div className="chat__item" id="chat3"></div>

								<div className="chat__item" id="chat4"></div>
                */}
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
                  <span className="text">Chat Bot Definition</span>
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
                      <CloseOutlined alt="" className="fn__svg" />
                    </button>
                  </span>
                </div>
              </li>
              <li className="group__item">
                <div className="fn__chat_link" href="#chat2">
                  <span className="text">Essay: Marketing</span>
                  <input type="text" value="Essay: Marketing" />
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
                  <span className="text">Future of Social Media</span>
                  <input type="text" value="Future of Social Media" />
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
