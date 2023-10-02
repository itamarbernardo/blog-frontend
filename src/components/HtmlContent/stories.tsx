import { Meta, StoryFn } from '@storybook/react';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: `Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Nam, quam ratione modi impedit quia aut
      rem cumque illo repellat possimus eius facilis
      quibusdam dignissimos maxime deserunt distinctio
      dolorem beatae itaque!`,
  },
} as Meta;

export const Template: StoryFn<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
