import { auth } from "@clerk/nextjs";
import prisma from "./db";
import { MAX_TOKEN_COUNT } from "@/constants";

export const initCount = async () => {
	const { userId } = auth();

	if (userId) {
		
		const TokenCountLimit = await prisma.TokenCountLimit.findUnique({
			where: {
				userId
			}
		});

		if (TokenCountLimit) {
			await prisma.TokenCountLimit.update({
				where: { userId: userId },
				data: { count: TokenCountLimit.count + 1 }
			});
		} else {
			await prisma.TokenCountLimit.create({
				data: { userId: userId, count: 1 }
			});
		}
	} else {

		return null;
		// no user logged in ...but midddleware will take care of this
	}
};

export const checkCount = async () => {
	const { userId } = auth();

	if (userId) {
		const TokenCountLimit = await prisma.TokenCountLimit.findUnique({
			where: {
				userId: userId
			}
		});

		if (!TokenCountLimit || TokenCountLimit.count < MAX_TOKEN_COUNT) {
			return true;
		} else {
			return false;
		}
	} else {

		return false;
	}
};