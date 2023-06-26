import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import postService from '@/services/post-service';

export async function allPosts(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await postService.getPosts();

        return res.status(httpStatus.OK).send(result)
    } catch (error) {
        next(error);
    }
}