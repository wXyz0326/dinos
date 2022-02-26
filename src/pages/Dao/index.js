import React from 'react';
import { Stack, Typography, Box, Grid } from '@mui/material';

export default function Dao() {
  return (
    <Box maxWidth="xl" mx="auto" mt={30}>
      <Grid container alignItems="center" spacing={10}>
        <Grid item md={4}>
          <Typography fontSize={48} fontWeight={700} textTransform="uppercase">
            Dao
          </Typography>

          <Typography fontSize={20} mt={5}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </Typography>
        </Grid>

        <Grid item md={8}>
          <Box>
            <Grid container columns={7} spacing={8} alignItems="stretch">
              <Grid item md={3}>
                <Box component="img" alt="dao_hero" src="/assets/images/dao_hero.png" fullWidth />
              </Grid>

              <Grid item md={2}>
                <Stack justifyContent="space-between" height="100%">
                  <Box component="img" alt="dao_1" src="/assets/images/dao_1.png" fullWidth />
                  <Box component="img" alt="dao_cross" src="/assets/images/dao_cross.png" fullWidth />
                </Stack>
              </Grid>

              <Grid item md={2}>
                <Stack justifyContent="space-between" height="100%">
                  <Box component="img" alt="dao_2" src="/assets/images/dao_2.png" fullWidth />
                  <Box component="img" alt="dao_3" src="/assets/images/dao_3.png" fullWidth />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}