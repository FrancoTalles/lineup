import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { allPosts } from '@/controllers';

const postRouter = Router();

postRouter.all('/*', authenticateToken).get('/', allPosts);

export { postRouter };
