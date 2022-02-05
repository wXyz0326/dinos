import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import { Box, List, Drawer, Link, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import Scrollbar from '../Scrollbar';
import MIconButton from '../@mui-extend/MIconButton';

// ----------------------------------------------------------------------

const ITEM_SIZE = 48;
const PADDING = 2.5;

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: ITEM_SIZE,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(PADDING),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary
}));

// ----------------------------------------------------------------------

MenuMobileItem.propTypes = {
  item: PropTypes.object,
  isOpen: PropTypes.bool,
  isActive: PropTypes.bool,
  onOpen: PropTypes.func
};

function MenuMobileItem({ item, isActive }) {
  const { title, path, icon } = item;

  return (
    <ListItemStyle
      // to={path}
      component={Link}
      href={path}
      sx={{
        ...(isActive && {
          color: grey[100],
          fontWeight: 'fontWeightMedium',
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }),
        color: grey[100]
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
    </ListItemStyle>
  );
}

MobileNavbar.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool
};

export default function MobileNavbar({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <MIconButton
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' })
        }}
      >
        <Icon icon={menu2Fill} />
      </MIconButton>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Link component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
            <Box
              component="img"
              src="/assets/images/logo.png"
              sx={{ my: 2, mx: PADDING }}
              width={50}
            />
          </Link>

          <List disablePadding>
            {navConfig.map((link) => (
              <MenuMobileItem
                key={link.title}
                item={link}
                isActive={pathname === link.path}
              />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
