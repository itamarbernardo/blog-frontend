import { PostProps } from '.';
import { data } from '../../api/dados.json';

const dados = data.posts.data[0];
const { title, excerpt, content, createdAt } = dados.attributes;
const cover = dados.attributes.cover.data;
const author = dados.attributes.author.data;
const categories = dados.attributes.categories.data;

export default {
  title,
  excerpt,
  cover,
  content,
  author,
  categories,
  createdAt,
} as PostProps;
