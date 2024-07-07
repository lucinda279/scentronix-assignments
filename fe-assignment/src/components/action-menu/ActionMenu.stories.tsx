import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Box } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import { toCurrencyString } from '@/utils/currency';

import ActionMenu from './ActionMenu';
import { ActionMenuPopperPlacement } from './ActionMenu.types';

const meta: Meta<typeof ActionMenu> = {
  component: ActionMenu,
  title: 'ActionMenu',
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ActionMenu>;

export const Primary: Story = {
  args: {
    title: 'Buy',
    placement: ActionMenuPopperPlacement.Right,
    Icon: AddShoppingCartOutlinedIcon,
    items: [
      {
        title: '30ml',
        subtitle: toCurrencyString(60),
        Icon: AddShoppingCartOutlinedIcon,
      },
      {
        title: '50ml',
        subtitle: toCurrencyString(80),
        Icon: AddShoppingCartOutlinedIcon,
      },
      {
        title: '5ml',
        Icon: AddShoppingCartOutlinedIcon,
        subtitle: toCurrencyString(15),
        tags: ['3 x 5ml for $40.00'],
      },
      {
        title: 'With long description',
        Icon: AddShoppingCartOutlinedIcon,
        subtitle: toCurrencyString(15),
        description:
          'Quae fugit porro animi sequi neque labore iste beatae eaque eos, harum veritatis excepturi maxime, fuga exercitationem cum tempore blanditiis, cumque nobis.',
        tags: ['Optional tag'],
      },
      {
        title: 'With long long long long long title',
        Icon: AddShoppingCartOutlinedIcon,
        subtitle: toCurrencyString(15),
        description: 'An optional description.',
        tags: ['Optional tag'],
      },
    ],
    onClick: () => {
      alert('Click!');
    },
  },
};

export const DefaultPopperPlacement: Story = {
  args: {
    ...Primary.args,
    placement: undefined,
  },
};

export const LeftPopperPlacement: Story = {
  decorators: [
    (Story) => (
      <Box textAlign="right">
        <Story />
      </Box>
    ),
  ],
  args: {
    ...Primary.args,
    placement: ActionMenuPopperPlacement.Left,
  },
};

export default meta;
