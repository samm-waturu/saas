import { NextResponse } from "next/server";

import OpenAi from "openai";

import ChatCompletionRequestMessage from "openai";

import { auth } from "@clerk/nextjs";

import { checkCount, initCount } from "@/lib/count";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY
});

// const count = await checkCount
// fine tuning
const fineTune: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a concise chat generator. Only Give brief, short and concise responses"
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { prompts } = body;

    const { userId } = auth();

    // Check if our api-key is valid

    if (!openai.apiKey) {
      return NextResponse("APIKEY_INVALID", { status: 500 });
    }

    // Check if we have a logged in user

    if (!userId) {
      return NextResponse("NOT_AUTHORIZED", { status: 401 });
    }

    // Check if we have passed a prompt

    if (!prompts) {
      return NextResponse("PROMPT_INVALID", { status: 400 });
    }

    // Check if token limit is available

    const count = await checkCount();

    if (!count) {
      return NextResponse("TOKEN_LIMIT_EXCEEDED", { status: 403 });
    }

    const responseApi = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      // Using the spread operator to destructure an prompts
      messages: [fineTune, ...prompts]
      // max_tokens: 10
    });

    await initCount();

    return NextResponse.json(responseApi.choices[0].message);

    /*
    return NextResponse.json({
      message: responseApi.choices[0].message,
      success: true,
      status: 200
    });
    */
  } catch (e) {
    // console.log(err);
    return NextResponse("SERVER_ERROR", { status: 500 });
  }
}