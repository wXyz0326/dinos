import React from 'react';
import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';

export default function IPadFlowBar({ customSx }) {
  return (
    <Stack className="skewBar" sx={{ height: 60, ...customSx }} justifyContent="center">
      <marquee>
        <Stack direction="row" spacing={5} alignItems="center">
          <Icon icon="emojione-monotone:eight-pointed-star" />
          <Typography
            textTransform="uppercase"
            color={grey[100]}
            fontSize={20}
            fontFamily="'Dela Gothic One', cursive"
            fontWeight={500}
          >
            Private Sale opens Friday the 4th of March at 6 PM UTC
          </Typography>
        </Stack>
      </marquee>
    </Stack>
  );
};