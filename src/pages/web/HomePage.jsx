import React from 'react';

import Hero from 'src/components/shared/hero';
import FAQs from 'src/components/shared/quest';
import Timer from 'src/components/shared/timer';
import Navbar from 'src/components/shared/navbar';
import Footer from 'src/components/shared/footer';
import GetInTouch from 'src/components/shared/getInTouch';
import AlternateTimeline from 'src/components/shared/timeline';

const HomePage = () => (
  <>
    <Navbar />
    <Timer />
    <Hero />
    <FAQs />
    <AlternateTimeline />
    <GetInTouch />
    <Footer />
  </>
);

export default HomePage;
