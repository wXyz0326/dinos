import React from 'react';
import TopNavbar from '../../components/TopNavbar';
import DaoSection from './DaoSection';
import FaqSection from './FaqSection';
import HeroSection from './HeroSection';
import LegendSection from './LegendSection';
import OurTeamSection from './OurTeamSection';
import PopularSection from './PopularSection';
import RoadmapSection from './RoadmapSection';
import SpecialSection from './SpecialSection';

export default function HomePage() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <LegendSection />
      <PopularSection />
      <DaoSection />
      <RoadmapSection />
      <SpecialSection />
      <OurTeamSection />
      <FaqSection />
    </>
  );
}