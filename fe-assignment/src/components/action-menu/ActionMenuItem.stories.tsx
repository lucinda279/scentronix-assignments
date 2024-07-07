import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Meta, StoryObj } from '@storybook/react';

import ActionMenuItem from './ActionMenuItem';

const meta: Meta<typeof ActionMenuItem> = {
  component: ActionMenuItem,
  title: 'ActionMenuItem',
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ActionMenuItem>;

export const Primary: Story = {
  args: {
    title: 'Button text',
    Icon: AddShoppingCartOutlinedIcon,
    subtitle: 'Price',
    description: 'An optional description.',
    tags: ['Optional tag'],
    onClick: () => {
      alert('Click!');
    },
  },
};

export const Default: Story = {
  args: {
    title: 'Button text',
    Icon: AddShoppingCartOutlinedIcon,
  },
};

export const WithSubtitleOnly: Story = {
  args: {
    title: 'Button text',
    Icon: AddShoppingCartOutlinedIcon,
    subtitle: 'Price',
  },
};

export const WithDescriptionOnly: Story = {
  args: {
    title: 'Button text',
    Icon: AddShoppingCartOutlinedIcon,
    description: 'Only description.',
  },
};

export const WithTagOnly: Story = {
  args: {
    title: 'Button text',
    Icon: AddShoppingCartOutlinedIcon,
    tags: ['Tag only'],
  },
};

export default meta;
