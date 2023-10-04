import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostStrapi } from '../shared-types/post-strapi';
import { SettingsStrapi } from '../shared-types/settings-strapi';

// export type LoadPostsVariables = {
//   categorySlug?: string;
//   postSlug?: string;
//   postSearch?: string;
//   authorSlug?: string;
//   tagSlug?: string;
//   sort?: string;
//   start?: number;
//   limit?: number;
// };

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
};

export const loadPosts = async (): Promise<StrapiPostAndSettings> => {
  const data: StrapiPostAndSettings = await request(
    config.graphqlURL,
    GRAPHQL_QUERY,
  );

  const { setting, posts } = data;

  const settingData = setting.data;
  const { id } = settingData;
  const { blogName, blogDescription, menuLink, text } = settingData.attributes;
  const logo = settingData.attributes.logo.data;

  const settingNew = {
    id,
    attributes: {
      blogName,
      blogDescription,
      logo,
      menuLink,
      text,
    },
  };

  const newPosts = posts.data.map((post) => {
    const { id } = post;
    const { title, slug, excerpt, createdAt, content, allowComments } =
      post.attributes;
    const coverNew = post.attributes.cover.data;
    const tagsNew = post.attributes.tags.data;
    const categoriesNew = post.attributes.categories.data;
    const authorNew = post.attributes.author.data;

    return {
      id,
      title,
      slug,
      excerpt,
      createdAt,
      content,
      allowComments,
      cover: coverNew,
      tags: tagsNew,
      categories: categoriesNew,
      author: authorNew,
    };
  });

  return { posts: newPosts, setting: settingNew };
};
