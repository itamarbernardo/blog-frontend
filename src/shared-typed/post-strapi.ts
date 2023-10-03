import { PostProps } from '../components/Post';
import { PostTagsProps } from '../components/PostTag';

export type PostStrapi = PostProps & {
  tags: PostTagsProps;
  slug: string;
};
