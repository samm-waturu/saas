"use client";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
const Signin = () => {
  const router = useRouter();
  return (
    <>
      <div className="style_fn_sign">
       
          <SignIn />
       
      </div> 
     
    </>
  );
};

export default Signin;
