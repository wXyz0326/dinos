import React from 'react';
import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';

export default function DesktopFlowBar({ customSx }) {
  return (
    <Stack
      className="skewBar"
      sx={{ height: { xl: 60, lg: 60, md: 40, sm: 30 }, ...customSx }}
      justifyContent="center"
    >
      <marquee>
        <Stack direction="row" spacing={5} alignItems="center">
          <Icon icon="emojione-monotone:eight-pointed-star" />
          <Typography
            textTransform="uppercase"
            color={grey[100]}
            fontSize={{ xl: 16, lg: 16, md: 12, sm: 10, xs: 8 }}
            fontFamily="'Dela Gothic One', cursive"
          >
            Private Sale opens Friday the 4th of March at 6 PM UTC
          </Typography>
        </Stack>
      </marquee>
    </Stack>
  );
};