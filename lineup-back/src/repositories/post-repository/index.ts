import { prisma } from '@/config';

async function get() {
  return prisma.post.findMany();
}

const postRepository = {
  get,
};

export default postRepository;
