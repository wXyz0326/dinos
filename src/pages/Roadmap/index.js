import React, { useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------------------

const data = [
  {
    id: 1,
    title: 'designing',
    image: 'dino_2.png'
  },
  {
    id: 2,
    title: 'minting',
    image: 'dino_3.png'
  },
  {
    id: 3,
    title: 'dao',
    image: 'dino_5.png'
  },
  {
    id: 4,
    title: 'charity',
    image: 'dino_6.png'
  },
  {
    id: 5,
    title: 'fashion',
    image: 'dino_7.png'
  },
];

// --------------------------------------------------------------------------------

export default function Roadmap() {
  const [selectedPosition, setSelectedPosition] = useState(0);

  return (
    <Box sx={{ mt: 25 }}>
      <Grid container columns={2}>
        <Grid item md={1}>
          <Stack direction="row" justifyContent="center">
            <Box width="50%">
              <Stack direction="row" justifyContent="end" position="relative">
                <Typography
                  position="absolute"
                  color="primary"
                  textTransform="uppercase"
                  fontSize={20}
                  fontWeight={500}
                  left={0}
                >{`${data[0].id}. ${data[0].title}`}</Typography>
                <Box
                  component="img"
                  alt="roadmap_1"
                  src="/assets/images/roadmap1.png"
                  position="absolute"
                  left={170}
                  top={-60}
                  zIndex={9}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setSelectedPosition(0)}
                />
                {
                  selectedPosition > 0 ? (
                    <Box className="roadmapLineRight-active" sx={{ width: '50%', transform: 'skewY(35deg)' }} />
                  ) : (
                    <Box className="roadmapLineRight" sx={{ width: '50%', transform: 'skewY(35deg)' }} />
                  )
                }
              </Stack>

              <Stack direction="row" justifyContent="end" position="relative">
                <Typography
                  position="absolute"
                  color="primary"
                  textTransform="uppercase"
                  fontSize={20}
                  fontWeight={500}
                  right={-200}
                  top={160}
                >{`${data[1].id}. ${data[1].title}`}</Typography>
                <Box
                  component="img"
                  alt="roadmap_2"
                  src="/assets/images/roadmap2.png"
                  position="absolute"
                  right={-60}
                  top={100}
                  zIndex={9}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setSelectedPosition(1)}
                />
                {
                  selectedPosition > 1 ? (
                    <Box className="roadmapLineLeft-active" sx={{ width: '100%', mt: 20, transform: 'skewY(-20deg)' }} />
                  ) : (
                    <Box className="roadmapLineLeft" sx={{ width: '100%', mt: 20, transform: 'skewY(-20deg)' }} />
                  )
                }
              </Stack>
              <Stack direction="row" justifyContent="start" position="relative">
                <Typography
                  position="absolute"
                  color="primary"
                  textTransform="uppercase"
                  fontSize={20}
                  fontWeight={500}
                  left={100}
                  top={160}
                >{`${data[2].id}. ${data[2].title}`}</Typography>
                <Box
                  component="img"
                  alt="roadmap_3"
                  src="/assets/images/roadmap3.png"
                  position="absolute"
                  left={-60}
                  top={100}
                  zIndex={9}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setSelectedPosition(2)}
                />
                {
                  selectedPosition > 2 ? (
                    <Box className="roadmapLineRight-active" sx={{ width: '100%', mt: 20, transform: 'skewY(20deg)' }} />
                  ) : (
                    <Box className="roadmapLineRight" sx={{ width: '100%', mt: 20, transform: 'skewY(20deg)' }} />
                  )
                }

              </Stack>
              <Stack direction="row" justifyContent="end" position="relative">
                <Typography
                  position="absolute"
                  color="primary"
                  textTransform="uppercase"
                  fontSize={20}
                  fontWeight={500}
                  left={250}
                  top={160}
                >{`${data[3].id}. ${data[3].title}`}</Typography>
                <Box
                  component="img"
                  alt="roadmap_4"
                  src="/assets/images/roadmap4.png"
                  position="absolute"
                  right={-60}
                  top={100}
                  zIndex={9}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setSelectedPosition(3)}
                />
                {
                  selectedPosition > 3 ? (
                    <Box className="roadmapLineLeft-active" sx={{ width: '50%', mt: 20, transform: 'skewY(-35deg)' }} />
                  ) : (
                    <Box className="roadmapLineLeft" sx={{ width: '50%', mt: 20, transform: 'skewY(-35deg)' }} />
                  )
                }
              </Stack>
              <Stack direction="row" justifyContent="center" position="relative">
                <Typography
                  position="absolute"
                  color="primary"
                  textTransform="uppercase"
                  fontSize={20}
                  fontWeight={500}
                  top={150}
                  left={20}
                >{`${data[4].id}. ${data[4].title}`}</Typography>
                <Box
                  component="img"
                  alt="roadmap_5"
                  src="/assets/images/roadmap5.png"
                  position="absolute"
                  top={100}
                  zIndex={9}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setSelectedPosition(4)}
                />
              </Stack>
            </Box>
          </Stack>
        </Grid>

        <Grid item md={1}>
          <Stack width="70%" mx="auto" spacing={4}>
            <Box component="img" alt="roadmap_hero" src={`/assets/images/${data[selectedPosition].image}`} />

            <Typography color="primary" textTransform="uppercase" fontSize={24} fontWeight={600} mb={10}>
              {data[selectedPosition].title}
            </Typography>

            <Typography fontSize={20}>
              We have started our designing process by creating unique traits for our four different base models. Our aim was to go beyond every expectation with every little detail, which in the end created this hyper detailed look. We are working hard to create the most exceptional looking NFT’s with solid utilities within a unique ecosystem on the Ethereum Network.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}