import React from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container, useMediaQuery, Stack, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import useOffSetTop from '../../hooks/useOffSetTop';
import MHidden from '../@mui-extend/MHidden';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

// ----------------------------------------------------------------------

const navConfig = [
  { title: 'About us', path: '#aboutUs' },
  { title: 'Roadmap', path: '#roadmap' },
  { title: 'Mission', path: '#mission' },
  { title: 'Team', path: '#team' }
];

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function TopNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="2xl"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <RouterLink to="/">
            <img src="/assets/images/logo.png" alt="logo" width={isDesktop ? '60' : '50'} />
          </RouterLink>

          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <DesktopNavbar isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>

          <Stack direction="row" justifyContent="center" alignItems="center">
            <IconButton sx={{ color: grey[100] }}>
              <Icon icon="ant-design:instagram-filled" />
            </IconButton>

            <IconButton sx={{ color: grey[100] }}>
              <Icon icon="akar-icons:discord-fill" />
            </IconButton>

            <IconButton sx={{ color: grey[100] }}>
              <Icon icon="akar-icons:twitter-fill" />
            </IconButton>
          </Stack>

          <MHidden width="mdUp">
            <MobileNavbar isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
