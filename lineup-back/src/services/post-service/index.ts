import postRepository from '@/repositories/post-repository';
import urlMetadata from 'url-metadata';
import { Post } from '@prisma/client';

async function getPosts() {
  const posts = await postRepository.get();

  const postsWithMetadata = await createDataWithMetadata(posts);

  return postsWithMetadata;
}

async function createDataWithMetadata(posts: Post[]) {
  try {
    const result = await Promise.all(
      posts.map(async (post) => {
        const metadata = await urlMetadata(post.link);
        return {
          ...post,
          linkimage: metadata.image,
          linktitle: metadata.title,
          linkdescription: metadata.description,
        };
      }),
    );

    return result;
  } catch (error) {
    console.log(error);
  }
}

const postService = {
  getPosts,
};

export default postService;
