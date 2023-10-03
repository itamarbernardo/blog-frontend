import { PostCardProps } from '.';
import { data } from '../../api/dados.json';

const dados = data.posts.data[0];
const { id } = dados;
const { title, excerpt, slug } = dados.attributes;
const cover = dados.attributes.cover.data;

export default {
  id,
  title,
  excerpt,
  cover,
  slug,
} as PostCardProps;
