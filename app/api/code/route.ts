import { NextResponse } from "next/server";

import OpenAi from "openai";

import ChatCompletionRequestMessage from "openai";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY
});

// Finetuning
const fineTune: ChatCompletionRequestMessage = {
  role: "system",
  content:"You are a code generator. Only answer in markdown code snippets and use code comments for code explanations"
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompts } = body;
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
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: err,
      success: false,
      status: 500
    });
  }
}