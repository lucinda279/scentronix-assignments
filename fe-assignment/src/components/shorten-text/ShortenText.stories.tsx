import { Box, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import ShortenText from './ShortenText';

const meta: Meta<typeof ShortenText> = {
  component: ShortenText,
  title: 'ShortenText',
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ShortenText>;

export const Primary: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit porro animi sequi neque labore iste beatae eaque eos, harum veritatis excepturi maxime, fuga exercitationem cum tempore blanditiis, cumque nobis.',
  },
  decorators: [
    (Story) => (
      <>
        <Typography>Hover to see full content:</Typography>
        <Box bgcolor="neutral.200" px={2} py={1} borderRadius={1}>
          <Story />
        </Box>
      </>
    ),
  ],
};

export const MultipleRows: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit porro animi sequi neque labore iste beatae eaque eos, harum veritatis excepturi maxime, fuga exercitationem cum tempore blanditiis, cumque nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit porro animi sequi neque labore iste beatae eaque eos, harum veritatis excepturi maxime, fuga exercitationem cum tempore blanditiis, cumque nobis.',
    rows: 2,
  },
  decorators: [
    (Story) => (
      <>
        <Typography>Hover to see full content:</Typography>
        <Box bgcolor="neutral.200" px={2} py={1} borderRadius={1}>
          <Story />
        </Box>
      </>
    ),
  ],
};

export const ShortContent: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
};

export default meta;
