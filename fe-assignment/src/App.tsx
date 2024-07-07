import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Grid } from '@mui/material';

import { ActionMenu } from '@/components/action-menu';
import {
  ActionMenuItemModel,
  ActionMenuPopperPlacement,
} from '@/components/action-menu/ActionMenu.types';
import { toCurrencyString } from '@/utils/currency';

const menuItems: ActionMenuItemModel[] = [
  {
    title: '50ml',
    subtitle: toCurrencyString(80),
    Icon: AddShoppingCartOutlinedIcon,
  },
  {
    title: '30ml',
    subtitle: toCurrencyString(60),
    Icon: AddShoppingCartOutlinedIcon,
  },
  {
    title: '5ml',
    subtitle: toCurrencyString(15),
    tags: [`3 x 5ml for ${toCurrencyString(15)}`],
    Icon: AddShoppingCartOutlinedIcon,
  },
];

function App() {
  return (
    <Grid container padding={2} height="100vh">
      <Grid item sm={6} xs={12}>
        <ActionMenu
          title="Buy"
          placement={ActionMenuPopperPlacement.Right}
          Icon={AddShoppingCartOutlinedIcon}
          items={menuItems}
        />
      </Grid>
      <Grid item sm={6} xs={12} textAlign="right">
        <ActionMenu
          title="Buy"
          placement={ActionMenuPopperPlacement.Left}
          Icon={AddShoppingCartOutlinedIcon}
          items={menuItems}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <ActionMenu
          title="Buy"
          placement={ActionMenuPopperPlacement.Right}
          Icon={AddShoppingCartOutlinedIcon}
          items={menuItems}
        />
      </Grid>
      <Grid item sm={6} xs={12} textAlign="right">
        <ActionMenu
          title="Buy"
          placement={ActionMenuPopperPlacement.Left}
          Icon={AddShoppingCartOutlinedIcon}
          items={menuItems}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <ActionMenu
          title="Buy"
          placement={ActionMenuPopperPlacement.Right}
          Icon={AddShoppingCartOutlinedIcon}
          items={menuItems}
        />
      </Grid>
      <Grid item sm={6} xs={12} textAlign="right">
        <ActionMenu
          title="Buy"
          placement={ActionMenuPopperPlacement.Left}
          Icon={AddShoppingCartOutlinedIcon}
          items={menuItems}
        />
      </Grid>
    </Grid>
  );
}

export default App;
