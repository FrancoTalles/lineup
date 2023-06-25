import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { duplicatedEmailError } from '@/errors';
import userRepository from '@/repositories/user-repository';

export async function createUser({ username, email, profileImg, password }: CreateUserParams): Promise<User> {
    await validateUniqueEmailOrFail(email);

    const hashedPassword = await bcrypt.hash(password, 12);

    return userRepository.create({
        username,
        email,
        profileImg,
        password: hashedPassword
    })
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) throw duplicatedEmailError();
}

export type CreateUserParams = Pick<User, 'username' | 'email' | 'profileImg' | 'password'>;

const userService = {
    createUser,
}

export default userService;