import React from 'react';
import TopNavbar from '../../components/TopNavbar';
import DaoSection from './DaoSection';
import HeroSection from './HeroSection';
import LegendSection from './LegendSection';
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
    </>
  );
}