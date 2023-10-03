import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';

export type PostsTemplateProps = {
  setting: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ setting, posts = [] }: PostsTemplateProps) => {
  console.log('POSTS TEMPLATE', posts);
  return (
    <BaseTemplate setting={setting}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};
