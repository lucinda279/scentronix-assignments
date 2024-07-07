import { ComponentType } from 'react';

import { ButtonProps, SvgIconProps } from '@mui/material';

export type ActionMenuItemModel = {
  /**
   * The menu item title.
   */
  title: string;
  /**
   * The menu item icon component type.
   */
  Icon: ComponentType<SvgIconProps>;
  /**
   * The menu item sub-title.
   */
  subtitle?: string;
  /**
   * The menu item description.
   */
  description?: string;
  /**
   * The menu item tag.
   */
  tags?: string[];
};

export type ActionMenuItemProps = ActionMenuItemModel & {
  /**
   * Callback fired when a menu item is clicked.
   */
  onClick?: () => void;
};

export enum ActionMenuPopperPlacement {
  Left = 'left',
  Right = 'right',
}

export type ActionMenuProps = Omit<ButtonProps, 'startIcon' | 'title' | 'onClick'> & {
  /**
   * The menu action title.
   */
  title: string;
  /**
   * The menu action icon component type.
   */
  Icon: ComponentType<SvgIconProps>;
  /**
   * Array of menu items.
   */
  items: ActionMenuItemModel[];
  /**
   * Items popper placement.
   */
  placement?: ActionMenuPopperPlacement;
  /**
   * Callback fired when a menu item is clicked.
   */
  onClick?: (item: ActionMenuItemModel) => void;
};
