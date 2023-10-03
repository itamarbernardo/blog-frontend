import { data } from '../../api/dados.json';

const mock = data.posts.data.map((post) => {
  const { id } = post;
  const { title, excerpt, slug } = post.attributes;
  const cover = post.attributes.cover.data;

  return {
    id,
    title,
    excerpt,
    cover,
    slug,
  };
});

export default { posts: mock };
