import React from 'react';
import { Box } from '@mui/material';
import MHidden from '../../components/@mui-extend/MHidden';
import DesktopHeroSection from './heroSections/DesktopHeroSection';
import IPadHeroSection from './heroSections/IPadHeroSection';
import DesktopFlowBar from './flowBars/DesktopFlowBar';
import IPadFlowBar from './flowBars/IPadFlowBar';
import IPhoneHeroSection from './heroSections/IPhoneHeroSection';
import IPhoneFlowBar from './flowBars/IPhoneFlowBar';
import DesktopAndIPadIntroSection from './introSections/DesktopAndIPadIntroSection';
import IPhoneIntroSection from './introSections/IPhoneIntroSection';

export default function HomePage() {
  return (
    <Box>
      <MHidden width="mdDown">
        <DesktopHeroSection />
        <DesktopFlowBar />
      </MHidden>

      <MHidden width="mdUp">
        <MHidden width="smDown">
          <IPadHeroSection />
          <IPadFlowBar />
        </MHidden>
        <MHidden width="smUp">
          <IPhoneHeroSection />
          <IPhoneFlowBar />
        </MHidden>
      </MHidden>

      <MHidden width="mdDown">
        <DesktopAndIPadIntroSection />
      </MHidden>

      <MHidden width="mdUp">
        <MHidden width="smDown">
          <DesktopAndIPadIntroSection />
        </MHidden>
        <MHidden width="smUp">
          <IPhoneIntroSection />
        </MHidden>
      </MHidden>

      <MHidden width="mdDown">
        <DesktopFlowBar />
      </MHidden>
      <MHidden width="mdUp">
        <MHidden width="smDown">
          <IPadFlowBar />
        </MHidden>
        <MHidden width="smUp">
          <IPhoneFlowBar />
        </MHidden>
      </MHidden>
    </Box>
  );
};