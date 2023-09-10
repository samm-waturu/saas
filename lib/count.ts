import { auth } from "@clerk/nextjs";
import prisma from "./db";
import { MAXTOKENCOUNT } from "@/constants";

const initCount = async () => {
	
	const { userId } = auth();

	if (!userId) {
		return
		// no user logged in ...but midddleware will take care of this
	}

	const TokenCountLimit = await prisma.TokenCountLimit.findUnique({
		where:{
			userId
		}
	})

	if(TokenCountLimit){
		await prisma.TokenCountLimit.update({
			where: {userId: userId},
			data: {count: TokenCountLimit.count + 1}
		})
	}else{
		await prisma.TokenCountLimit.create({
			data: {userId: userId, count: 1}
		})
	}
};

const checkCount = async() => {

	const {userId} = auth();

	if(!userId){
		return false
	}

	const TokenCountLimit = await prisma.TokenCountLimit.findUnique({
		where:{
			userId: userId
		}
	})

	if(!TokenCountLimit || TokenCountLimit<MAXTOKENCOUNT){
		return true
	}else{
		return false
	}


};