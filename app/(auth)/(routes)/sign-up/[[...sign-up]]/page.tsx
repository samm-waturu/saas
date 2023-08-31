"use client";

import { useRouter } from "next/navigation";
import { SignUp } from "@clerk/nextjs";

const Signup = () => {
  const router = useRouter();
  return <SignUp />;
};

export default Signup;
