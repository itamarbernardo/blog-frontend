import Head from 'next/head';
import { GetStaticProps } from 'next';
import { loadPosts, StrapiPostAndSettings } from '../api/load-posts';
import { PostsTemplate } from '../templates/PostsTemplate';

export default function Index({ posts, setting }: StrapiPostAndSettings) {
  console.log('SETTINGS DENTRO:', setting);
  return (
    <>
      <Head>
        <title>
          {setting.attributes.blogName} - {setting.attributes.blogDescription}
        </title>
        <meta name="description" content={setting.attributes.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} setting={setting} />
    </>
  );
}

export const getStaticProps: GetStaticProps<
  StrapiPostAndSettings
> = async () => {
  const { setting, posts } = await loadPosts();

  if (!posts || !posts.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: posts,
      setting: setting,
    },
    revalidate: 24 * 60 * 60, //Revalidate de 1d pra ele puxar os dados novamente e gerar a build novamente
  };
};
