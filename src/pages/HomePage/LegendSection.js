import React from 'react';
import { Box, Button, Card, Grid, Paper, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';
import { bgcolor } from '@mui/system';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[100]),
  fontSize: 20,
  textTransform: 'uppercase',
  paddingTop: 10,
  paddingBottom: 10,
  width: '40%',
  backgroundColor: grey[100],
  '&:hover': {
    backgroundColor: grey[400],
  },
}));

export default function LegendSection() {
  return (
    <Box>
      <Grid container columns={2} spacing={5} alignItems="center">
        <Grid item md={1}>
          <Stack direction="row" justifyContent="center">
            <Stack spacing={3} width="80%">
              <Typography color={grey[100]} fontSize={56} fontWeight={900} textTransform="uppercase">
                The Legend
              </Typography>
              <Typography color={grey[100]} fontSize={20}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </Typography>
              <ColorButton>
                Join us on discord
              </ColorButton>
            </Stack>
          </Stack>
        </Grid>

        <Grid item md={1}>
          <Grid container columns={2} alignItems="center" spacing={10}>
            <Grid item md={1}>
              <Stack direction="row" justifyContent="end" mt={5}>
                <Paper sx={{
                  px: 3,
                  py: 2,
                  width: '70%',
                  borderRadius: 3,
                  borderColor: purple[600],
                  borderWidth: 2,
                  borderStyle: 'solid',
                  backgroundImage: `linear-gradient(to right, rgba(215, 76, 255, 0.26), rgba(255, 255, 255, 0))`
                }}>
                  <Box component="img" alt="legend_1" src="/assets/images/legend1.png" />
                  <Typography color={grey[100]} fontSize={18} fontWeight={600} mt={2} textTransform="uppercase">
                    6000 supplier
                  </Typography>
                </Paper>
              </Stack>

              <Stack direction="row" justifyContent="end" mt={9}>
                <Paper sx={{
                  px: 3,
                  py: 2,
                  width: '60%',
                  borderRadius: 3,
                  borderColor: purple[600],
                  borderWidth: 2,
                  borderStyle: 'solid',
                  backgroundImage: `linear-gradient(to right, rgba(215, 76, 255, 0.26), rgba(255, 255, 255, 0))`
                }}>
                  <Box component="img" alt="legend_3" src="/assets/images/legend3.png" />
                  <Typography color={grey[100]} fontSize={18} fontWeight={600} mt={2} textTransform="uppercase">
                    Big world mission
                  </Typography>
                </Paper>
              </Stack>
            </Grid>

            <Grid item md={1}>
              <Paper sx={{
                px: 3,
                py: 2,
                width: '60%',
                borderRadius: 3,
                borderColor: purple[600],
                borderWidth: 2,
                borderStyle: 'solid',
                backgroundImage: `linear-gradient(to right, rgba(215, 76, 255, 0.26), rgba(255, 255, 255, 0))`
              }}>
                <Box component="img" alt="legend_2" src="/assets/images/legend2.png" />
                <Typography color={grey[100]} fontSize={18} fontWeight={600} mt={2} textTransform="uppercase">
                  Hand-drawn arts
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}