import React from 'react';
import { Button, Stack, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Incrementer from '../../components/Incrementor';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[100]),
  fontSize: 16,
  width: '10%',
  backgroundColor: grey[100],
  '&:hover': {
    backgroundColor: grey[400],
  },
}));

export default function MintSection() {
  return (
    <Stack maxWidth="lg" mx="auto" spacing={4} mt={20}>
      <Typography color={grey[100]} fontSize={56} fontWeight={900} textTransform="uppercase" textAlign="center">
        Mint
      </Typography>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={5}>
        <Incrementer available={10} />
        <ColorButton>Mint</ColorButton>
      </Stack>
    </Stack>
  );
}