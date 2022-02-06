import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { grey, purple } from '@mui/material/colors';

export default function RoadmapSection() {
  return (
    <Stack spacing={20} mt={30}>
      <Typography color={grey[100]} fontSize={56} fontWeight={900} textTransform="uppercase" textAlign="center">
        Roadmap
      </Typography>

      <Box>
        <Grid container columns={2}>
          <Grid item md={1}>
            <Stack direction="row" justifyContent="center">
              <Box width="50%">
                <Stack direction="row" justifyContent="end" position="relative">
                  <Typography
                    position="absolute"
                    color={purple['A400']}
                    textTransform="uppercase"
                    fontSize={20}
                    fontWeight={900}
                    left={0}
                  >1. designing</Typography>
                  <Box
                    component="img"
                    alt="roadmap_1"
                    src="/assets/images/roadmap1.png"
                    position="absolute"
                    left={170}
                    top={-60}
                    zIndex={9}
                  />
                  <Box className="roadmapLineRight" sx={{ width: '50%', transform: 'skewY(35deg)' }} />
                </Stack>

                <Stack direction="row" justifyContent="end" position="relative">
                  <Typography
                    position="absolute"
                    color={purple['A400']}
                    textTransform="uppercase"
                    fontSize={20}
                    fontWeight={900}
                    right={-200}
                    top={160}
                  >2. Minting</Typography>
                  <Box
                    component="img"
                    alt="roadmap_2"
                    src="/assets/images/roadmap2.png"
                    position="absolute"
                    right={-60}
                    top={100}
                    zIndex={9}
                  />
                  <Box className="roadmapLineLeft" sx={{ width: '100%', mt: 20, transform: 'skewY(-20deg)' }} />
                </Stack>
                <Stack direction="row" justifyContent="start" position="relative">
                  <Typography
                    position="absolute"
                    color={purple['A400']}
                    textTransform="uppercase"
                    fontSize={20}
                    fontWeight={900}
                    left={100}
                    top={160}
                  >3. Dao</Typography>
                  <Box
                    component="img"
                    alt="roadmap_3"
                    src="/assets/images/roadmap3.png"
                    position="absolute"
                    left={-60}
                    top={100}
                    zIndex={9}
                  />
                  <Box className="roadmapLineRight" sx={{ width: '100%', mt: 20, transform: 'skewY(20deg)' }} />
                </Stack>
                <Stack direction="row" justifyContent="end" position="relative">
                  <Typography
                    position="absolute"
                    color={purple['A400']}
                    textTransform="uppercase"
                    fontSize={20}
                    fontWeight={900}
                    left={250}
                    top={160}
                  >4. Charity</Typography>
                  <Box
                    component="img"
                    alt="roadmap_4"
                    src="/assets/images/roadmap4.png"
                    position="absolute"
                    right={-60}
                    top={100}
                    zIndex={9}
                  />
                  <Box className="roadmapLineLeft" sx={{ width: '50%', mt: 20, transform: 'skewY(-35deg)' }} />
                </Stack>
                <Stack direction="row" justifyContent="center" position="relative">
                  <Typography
                    position="absolute"
                    color={purple['A400']}
                    textTransform="uppercase"
                    fontSize={20}
                    fontWeight={900}
                    top={150}
                    left={20}
                  >5. fashion</Typography>
                  <Box
                    component="img"
                    alt="roadmap_5"
                    src="/assets/images/roadmap5.png"
                    position="absolute"
                    top={100}
                    zIndex={9}
                  />
                </Stack>
              </Box>
            </Stack>
          </Grid>

          <Grid item md={1} bgcolor="black" sx={{ p: 8 }}>
            <Stack width="70%" mx="auto" spacing={5}>
              <Box component="img" alt="roadmap_hero" src="/assets/images/roadmap_hero.png" />

              <Typography color={purple['A400']} textTransform="uppercase" fontSize={24} fontWeight={600} mb={10}>
                designing
              </Typography>

              <Typography color={grey[100]} fontSize={20}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}