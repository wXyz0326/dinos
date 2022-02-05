import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { Icon } from '@iconify/react';

export default function HeroSection() {
  return (
    <>
      <Stack
        height={{ lg: 900 }}
        maxWidth="2xl"
        position="relative"
        justifyContent="center"
      >
        <Typography fontSize={190} fontWeight={900} textTransform="uppercase" color={grey[800]} textAlign="center">
          DRIPPING dino`s
        </Typography>
        <Box position="absolute" left={200} bottom={0}>
          <Box component="img" alt="hero" src="/assets/images/hero.png" sx={{ height: '100%' }} />
        </Box>
        <Box position="absolute" right={200}>
          <Typography color={purple['A400']} textTransform="uppercase" fontSize={28} fontWeight={500} mb={10}>
            Welcome To The
          </Typography>
          <Typography color={grey[100]} textTransform="uppercase" fontSize={120} fontWeight={900} lineHeight={0.5}>
            Dripping <br />
            <Typography component="span" color={purple['A400']} textTransform="uppercase" fontSize={120} fontWeight={900}>
              Dino's
            </Typography>
          </Typography>
        </Box>
      </Stack>

      <Stack className="skewBar" justifyContent="center">
        <Stack direction="row" spacing={5}>

          {
            [0, 1, 2, 3, 4].map(itemIndex => (
              <marquee key={itemIndex}>
                <Stack direction="row" spacing={5} alignItems="center" fontSize={20}>
                  <Icon icon="emojione-monotone:eight-pointed-star" />
                  <Typography textTransform="uppercase" color={grey[100]}>
                    More than just a fashion
                  </Typography>
                </Stack>
              </marquee>
            ))
          }
        </Stack>
      </Stack>
    </>
  );
}