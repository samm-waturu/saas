import { NextResponse } from "next/server";

import OpenAi from "openai";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompts } = body;
    const responseApi = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: prompts
    });

    return NextResponse.json({
      message: responseApi.choices[0].message,
      success: true,
      status: 200
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: err,
      success: false,
      status: 500
    });
  }
}
