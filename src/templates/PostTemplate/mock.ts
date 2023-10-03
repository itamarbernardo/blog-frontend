import { data } from '../../api/dados.json';

const setting = data.setting.data;
const { id } = setting;
const { blogName, blogDescription, menuLink, text } = setting.attributes;
const logo = setting.attributes.logo.data;

const settings = {
  id,
  attributes: {
    blogName,
    blogDescription,
    logo,
    menuLink,
    text,
  },
};

const post = data.posts.data[0];
const { id: idPost } = post;
const { title, excerpt, slug, content, createdAt } = post.attributes;
const cover = post.attributes.cover.data;
const author = post.attributes.author.data;
const categories = post.attributes.categories.data;
const tags = post.attributes.tags.data;

const mockPost = {
  id: idPost,
  title,
  excerpt,
  cover,
  slug,
  content,
  createdAt,
  author,
  categories,
  tags,
};

export default { settings, post: mockPost };
