import { NextResponse } from "next/server";
// Fetch userID, of a logged in or new member
import { auth } from "@clerk/nextjs";
// @ts-ignore
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  //   organization: "org-3oQaWdmS5aRdPLSNqv1SuF8r",
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

export async function POST(req: Request) {
  // when pushing a request we access this function
  try {
    const { userId } = auth();

    const body = await req.json();

    const { messages } = body;

    if (!userId) {
      return new NextResponse("unauthorized", { status: 401 });
    }
    if (!configuration.apiKey) {
      return new NextResponse("Open API key not configured", {
        status: 500
      });
    }
    if (!messages) {
      return new NextResponse("Messages are required", {
        status: 400
      });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages
    });
  } catch (error: any) {
    console.log("CHAT ERROR", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
