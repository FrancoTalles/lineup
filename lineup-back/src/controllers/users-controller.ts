import userService from "@/services/users-service";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { CreateUserParams } from "@/services/users-service";


export async function usersPost(req: Request, res: Response, next: NextFunction) {
    const { username, email, profileImg, password } = req.body as CreateUserParams;

    try {
        const user = await userService.createUser({
            username, email, profileImg, password
        })
        return res.status(httpStatus.CREATED).json({
            id: user.id,
            email: user.email,
        });
    } catch (error) {
        next(error)
    }
}