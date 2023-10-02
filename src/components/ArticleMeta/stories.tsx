import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleMeta, ArticleMetaProps } from '.';
import mock from './mock';
import React from 'react';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ArticleMetaProps>;

export const Template: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};
