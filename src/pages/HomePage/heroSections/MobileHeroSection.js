import React from 'react';
import { Box, Button, Stack, Typography, styled, Grid, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import Incrementer from '../../../components/Incrementor';

/* ------------------------------------------------------------------------------ */

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[100]),
  fontSize: { xl: 16, lg: 16, md: 16, sm: 14, xs: 8 },
  width: '10%',
  backgroundColor: grey[100],
  '&:hover': {
    backgroundColor: grey[400],
  },
}));

/* ------------------------------------------------------------------------------ */

export default function MobileHeroSection() {
  return (
    <Box position="relative" mt={10}>
      <Box position="absolute" top="20%" width="100%">
        <Typography
          fontSize={80}
          fontWeight={900}
          textTransform="uppercase"
          color={grey[900]}
          textAlign="center"
          mt={20}
        >
          DRIPPING dino`s
        </Typography>
      </Box>

      <Box ml={6} mt={18} zIndex={99}>
        <Typography
          color="primary"
          textTransform="uppercase"
          fontSize={26}
          fontWeight={500}
          mb={5}
        >
          Welcome To The
        </Typography>
        <Typography
          color={grey[100]}
          textTransform="uppercase"
          fontSize={100}
          fontWeight={900}
          lineHeight={0.5}
        >
          Dripping <br />
          <Typography
            component="span"
            color="primary"
            textTransform="uppercase"
            fontSize={100}
            fontWeight={900}
          >Dino's</Typography>
        </Typography>
        <Stack direction="row" alignItems="center" spacing={5} ml={2}>
          <Incrementer available={3} />
          <ColorButton>Mint</ColorButton>
        </Stack>
      </Box>

      <Box mt={10} zIndex={99}>
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item sm={9}>
            <Box component="img" src="/assets/images/hero.png" width="100%" alt="" sx={{ zIndex: 99 }} />
          </Grid>
          <Grid item sm={3}>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <IconButton sx={{ color: '#F2F2F2', fontSize: 36 }}>
                <Icon icon="ant-design:instagram-filled" />
              </IconButton>

              <IconButton sx={{ color: '#F2F2F2', fontSize: 36 }}>
                <Icon icon="akar-icons:discord-fill" />
              </IconButton>

              <IconButton sx={{ color: '#F2F2F2', fontSize: 36 }}>
                <Icon icon="akar-icons:twitter-fill" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}