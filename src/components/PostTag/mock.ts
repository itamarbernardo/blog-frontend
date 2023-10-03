import { data } from '../../api/dados.json';

const dados = data.posts.data[0];
const { tags } = dados.attributes;

const mock = tags.data.map((tag) => {
  const { id } = tag;
  const { displayName, slug } = tag.attributes;

  return {
    id,
    attributes: {
      displayName,
      slug,
    },
  };
});

export default { tags: mock };
