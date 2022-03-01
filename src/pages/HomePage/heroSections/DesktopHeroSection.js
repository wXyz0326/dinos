import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, Typography, styled, Snackbar, Alert } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { ethers } from "ethers";
import Incrementer from '../../../components/Incrementor';
import useWallet from '../../../hooks/useWallet';
import { ABI, CONTRACT_ADDRESS, NFT_PRICE } from '../../../constants';

/* ------------------------------------------------------------------------------ */

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[100]),
  fontSize: 20,
  px: 3,
  minWidth: '20%',
  backgroundColor: grey[100],
  '&:hover': {
    backgroundColor: grey[400],
  },
}));

/* ------------------------------------------------------------------------------ */

export default function DesktopHeroSection() {
  const { mintAmount } = useWallet();

  const [isOpened, setIsOpened] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');
  const [currentAccount, setCurrentAccount] = useState(null);

  const openAlert = (severity, message) => {
    setSeverity(severity);
    setMessage(message);
    setIsOpened(true);
  };

  const connectWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      openAlert('warning', 'Please install metamask.');
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      openAlert('error', 'Sorry something was wrong.');
    }
  };

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      return openAlert('warning', 'Make sure you have Metamask installed.');
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      setCurrentAccount(account);
    } else {
      return openAlert('warning', 'No authorized account found.');
    }
  };

  const mint = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        let transaction = await contract.mint(mintAmount, { value: ethers.utils.parseEther(String(NFT_PRICE * mintAmount)) });
        await transaction.wait();

        openAlert('success', 'Minted!');
      } else {
        openAlert('error', 'Ethereum object doesn\'t exist');
      }
    } catch (error) {
      openAlert('error', 'Transaction is failed.');
    }
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <Stack
      height={{ xl: 750, lg: 600, md: 400, sm: 300, xs: 200 }}
      maxWidth="2xl"
      position="relative"
      justifyContent="center"
    >
      <Typography
        fontSize={{ xl: 200, lg: 120, md: 80, sm: 60, xs: 30 }}
        fontWeight={900}
        textTransform="uppercase"
        color={grey[800]}
        textAlign="center"
        mt={20}
      >DRIPPING dino`s</Typography>

      <Box position="absolute" bottom={0}>
        <Box
          component="img"
          alt="hero"
          src="/assets/images/hero.png"
          sx={{ width: { xl: 700, lg: 500, md: 300, sm: 220, xs: 140 } }}
        />
      </Box>

      <Box position="absolute" right={{ xl: 300, lg: 100, md: 100, sm: 100, xs: 40 }} mt={20}>
        <Typography
          color={purple['A400']}
          textTransform="uppercase"
          fontSize={{ xl: 28, lg: 24, md: 18, sm: 14, xs: 12 }}
          fontWeight={500}
          mb={{ xl: 5, lg: 5, md: 3, sm: 3, xs: 1 }}
          ml={1.5}
        >
          Welcome To The
        </Typography>
        <Typography
          color={grey[100]}
          textTransform="uppercase"
          fontSize={{ xl: 120, lg: 100, md: 70, sm: 50, xs: 20 }}
          fontWeight={900}
          lineHeight={0.5}
        >
          Dripping <br />
          <Typography
            component="span"
            color={purple['A400']}
            textTransform="uppercase"
            fontSize={{ xl: 120, lg: 100, md: 70, sm: 50, xs: 20 }}
            fontWeight={900}
          >Dino's</Typography>
        </Typography>
        <Stack direction="row" alignItems="center" spacing={5} ml={2}>
          <Incrementer available={3} />
          {
            currentAccount ? (
              <ColorButton onClick={mint}>Mint</ColorButton>
            ) : (
              <ColorButton onClick={connectWallet}>Connect wallet</ColorButton>
            )
          }
        </Stack>
      </Box>
      <Snackbar
        open={isOpened}
        autoHideDuration={5000}
        onClose={() => setIsOpened(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert variant="filled" onClose={() => setIsOpened(false)} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack >
  );
}