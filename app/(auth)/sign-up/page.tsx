"use client";

import { useRouter } from "next/navigation";
const SignUp = () => {
  const router = useRouter();
  return (
    <>
      <div className="style_fn_sign">
        <div className="sign__content">
          <h1 className="logo">hello world</h1>
          <form className="signup">
            <div className="form__content">
              <div className="form__title">Sign Up</div>
              <div className="form__name">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="input"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="form__username">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="input"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="form__email">
                <label htmlFor="email">Username</label>
                <input
                  type="text"
                  className="input"
                  id="email"
                  placeholder="yourmail@example.com"
                />
              </div>
              <div className="form__pass">
                <label htmlFor="user_password">Password</label>
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
                  router.replace("/profile");
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
                <a href="#" className="style_fn_button">
                  <span>Sign up with Google</span>
                </a>
              </div>
            </div>
          </form>
          <div className="sign__desc">
            <p>
              Don&apos;t have an account?{" "}
              <a href="/sign-in">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
