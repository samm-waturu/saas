"use client";
import { useRouter } from "next/navigation";
const SignIn = () => {
  const router = useRouter();
  return (
    <>
      <div className="style_fn_sign">
        <div className="sign__content">
          <h1 className="logo">hello world</h1>
          <form className="login">
            <div className="form__content">
              <div className="form__title">Sign In</div>
              <div className="form__username">
                <label htmlFor="user_login">Username or Email</label>
                <input
                  type="text"
                  className="input"
                  id="user_login"
                  autoCapitalize="off"
                  autoComplete="username"
                  aria-describedby="login-message"
                />
              </div>
              <div className="form__pass">
                <div className="pass_lab">
                  <label htmlFor="user_password">Password</label>
                  <a href="#">Forget Password?</a>
                </div>
                <input
                  type="password"
                  id="user_password"
                  autoComplete="current-password"
                  spellCheck="false"
                />
              </div>
              <div
                className="form__submit"
                onClick={e => {
                  router.replace("/");
                }}>
                <label className="fn__submit">
                  <input
                    type="submit"
                    name="submit"
                  />
                </label>
              </div>
              <div className="form__alternative">
                <div className="fn__lined_text">
                  <div className="line"></div>
                  <div className="text">Or</div>
                  <div className="line"></div>
                </div>
                <a className="style_fn_button">
                  <span>Sign in with Google</span>
                </a>
              </div>
            </div>
          </form>
          <div className="sign__desc">
            <p>
              Not a member? <a href="/sign-up">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
