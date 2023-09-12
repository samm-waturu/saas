import { auth } from "@clerk/nextjs";

import prisma from "./db";

export const storeResponse = async (response, prompt): {response: String, prompt: String} => {
	const { userId } = auth();
	if(userId){

		const StoreResponseBody = await prisma.StoreResponseBody.create({
			where:{
				userId
			},
			data:{
				prompt: prompt, response: response
			}
		})

	}else{
		return null
	}
};