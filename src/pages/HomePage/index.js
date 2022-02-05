import React from 'react';
import TopNavbar from '../../components/TopNavbar';
import HeroSection from './HeroSection';
import LegendSection from './LegendSection';
import PopularSection from './PopularSection';

export default function HomePage() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <LegendSection />
      <PopularSection />
    </>
  );
}