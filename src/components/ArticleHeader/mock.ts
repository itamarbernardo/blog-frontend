import { ArticleHeaderProps } from '.';
import { data } from '../../api/dados.json';

const dados = data.posts.data[0];
const { id } = dados;
const { title, excerpt, createdAt } = dados.attributes;
const cover = dados.attributes.cover.data;
const author = dados.attributes.author.data;
const categories = dados.attributes.categories.data;

export default {
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
} as ArticleHeaderProps;
