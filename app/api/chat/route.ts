import { NextResponse } from "next/server";

import OpenAi from "openai";

import ChatCompletionRequestMessage from "openai";

import { auth } from "@clerk/nextjs";

import { checkCount, initCount } from "@/lib/count";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY
});

// fine tuning
const fineTune: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a concise chat generator. Only Give brief, short and concise responses"
};
export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const count = await checkCount();
    const body = await request.json();
    const { prompts } = body;

  /*  if (!userId) {
      return NextResponse.json({
        message: "Not authorized",
        success: false,
        status: 401
      });
    }

    if (!openai.apiKey) {
      return NextResponse.json({
        message: "API key invalid",
        succes: false,
        status: 500
      });
    }

    if (!prompts) {
      return NextResponse.json({
        message: "Prompts required",
        success: false,
        status: 400
      });
    }

    if (!count) {
      return NextResponse.json({
        message: "Free trial has expired",
        success: false,
        status: 403
      });
    }*/

    const responseApi = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      // Using the spread operator to destructure an prompts
      messages: [fineTune, ...prompts]
    });
    return NextResponse.json(responseApi.choices[0].message);
    /*
    return NextResponse.json({
      message: responseApi.choices[0].message,
      success: true,
      status: 200
    });
    */
  /*  if(responseApi){
    
    await initCount()
    }
    */

  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: err,
      success: false,
      status: 500
    });
  }
}