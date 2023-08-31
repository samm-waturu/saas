"use client";

import { useRouter } from "next/navigation";
import { SignUp } from "@clerk/nextjs";

const Signup = () => {
  const router = useRouter();
  return (
    <>
      <div className="style_fn_sign">
        <SignUp />
      </div> 
    </>
  );
};

export default Signup;
