import { NextResponse } from "next/server";

import OpenAi from "openai";

import ChatCompletionRequestMessage from "openai";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { prompt, amount, resolution } = body;

    if (!prompt || !amount || !resolution) {
      return NextResponse.json({
        message:
          "Either the prompt, amount or resolution is invalid or missing!",
        success: false,
        status: 500
      });
    }

    const responseApi = await openai.images.generate({
      prompt: prompt,
      n: parseInt(amount, 10),
      size: resolution
    });
    return NextResponse.json(responseApi.data);
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
      message: `${err} Error`,
      success: false,
      status: 500
    });
  }
}