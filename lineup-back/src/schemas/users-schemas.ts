import Joi from 'joi';
import { CreateUserParams } from '@/services/users-service';

export const createUserSchema = Joi.object<CreateUserParams>({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  profileImg: Joi.string().required(),
  password: Joi.string().min(6).required(),
});
