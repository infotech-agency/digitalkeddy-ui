import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import Achievements from '@/components/home/Achievements';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedCaseStudies from '@/components/home/FeaturedCaseStudies';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import LatestBlogs from '@/components/home/LatestBlogs';
import HomeFAQ from '@/components/home/HomeFAQ';

import Technologies from '@/components/home/Technologies';
import LilAbout from '@/components/home/LilAbout';
import SmartStrategiesSection from '@/components/sections/Smartstrategiessection';
import FloatingContactButtons from '@/components/layout/FloatingContactButtons';
import CircularCarousel from '@/components/animation/CircularCarouselItem';
import ServicesSection from '@/components/home/ServicesSection';
import QuickProposalForm from '@/components/home/QuickProposalForm';
import PortfolioContent from '@/components/portfolio/PortfolioContent';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import CTABanner from '@/components/common/CTABanner';
import Process from '@/components/home/Process';
import dynamic from 'next/dynamic';


export default function HomePage() {
  const items = [
  { src: 'https://i.pinimg.com/736x/c7/a3/89/c7a389048e2bcd7f0385c4a56b61593f.jpg', alt: 'Mist drifting through a valley', title: 'Valley', subtitle: 'Landscape' },
  { src: 'https://i.pinimg.com/736x/06/8a/9a/068a9a510b3c6812eda6daa7f0ab86ac.jpg', alt: 'A studio portrait', title: 'Portrait', subtitle: 'Studio' },
  { src: 'https://i.pinimg.com/736x/83/be/0e/83be0e01d3dea4c9c981a6d6e7340396.jpg', alt: 'Glass towers from street level', title: 'Towers', subtitle: 'Architecture' },
    { src: 'https://i.pinimg.com/736x/d0/93/dc/d093dc62df4e9151b08901936d57c683.jpg', title: 'Towers', subtitle: 'Architecture' },
      { src: 'https://i.pinimg.com/736x/4a/76/74/4a7674dff6f9d8b91ff249aead803612.jpg', title: 'Towers', subtitle: 'Architecture' },
       { src: 'https://i.pinimg.com/736x/43/2c/fa/432cfabd176bb6ccb680a5564de02442.jpg', title: 'Towers', subtitle: 'Architecture' },

       { src: 'https://i.pinimg.com/1200x/67/b7/f5/67b7f5615db1c03b104044333ece6c04.jpg', title: 'Towers', subtitle: 'Architecture' },

        { src: 'https://i.pinimg.com/736x/b4/3c/0b/b43c0b0d65e7500b6f95222ae5021835.jpg', title: 'Towers', subtitle: 'Architecture' },

         { src: 'https://i.pinimg.com/1200x/b5/f3/14/b5f3140d885a9ebd031ee4acd19ce85c.jpg', title: 'Towers', subtitle: 'Architecture' },

         { src: 'https://i.pinimg.com/736x/0b/b4/e4/0bb4e4accdb620231c8bffb829dd9883.jpg', title: 'Towers', subtitle: 'Architecture' },

            { src: 'https://i.pinimg.com/736x/27/a5/c3/27a5c3ffdfa61167e2f2537a2c876ccc.jpg', title: 'Towers', subtitle: 'Architecture' },
      
];
  const cards = [
  {
  title: "Our Services",
  subtitle: "Scroll to explore the services we offer.",
  badge: "Services"
},
  {
    title: "Web Developement", 
    subtitle: "",
    backgroundImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Social Media", 
    subtitle: "",
    backgroundImage: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Digital Marketing", 
    subtitle: "",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`"
  },
  {
    title: "Graphic Designing", 
    subtitle: "",
    backgroundImage: "https://www.admecindia.co.in/wp-content/uploads/2024/03/Ways-Photoshop-Benefit-a-Graphic-Design-Course.jpg"
  },
  {
    title: "Google & Meta Ads", 
    subtitle: "",
    backgroundImage: "https://zoople.in/wp-content/uploads/2024/03/Blog-Image_11-Mar-2024.jpg"
  }


];

//   return (
//     <>
//       <FloatingContactButtons
//       whatsappNumber="919625350146"   // country code, no + ya spaces
//   phoneNumber="+919625350146"
//       />
//       <Hero />

//       {/* <WmeStyleHero/> */}
//       <div style={{ width: '100%', height: '560px', position: 'relative' }}>
//   <CircularCarousel
//     items={items}
//     preset="cylinder"
//     intro="rise"
//     cardWidth={220}
//     aspectRatio={1}
//     speed={14}
//     captions={false}
//     gap={25}
//     tilt={-5}
//     curve={1}
//     perspective={2500}
//     autoplay="drift"
//     interval={3}
//     direction="left"
//     momentum={0.6}
//     snap
//     pauseOnHover
//     focusOnClick
//     draggable
//     parallax={0.3}
//     stretch={0.5}
//     fadeColor="#000000"
//     depthFade={0.55}
//     innerShade={0.6}
//     cornerRadius={12}
// />
// </div>

//       <TrustedBy />
     
//       {/* <Achievements /> */}
//       <ServicesSection/>
//       <SmartStrategiesSection/>
//       {/* <ScrollStack cards={cards}/> */}
//       <LilAbout/>
//       <WhyChooseUs />
//       {/* <ServicesGrid /> */}
//       {/* <IndustryExpertise /> */}
//       {/* <FeaturedCaseStudies /> */}
//       <PortfolioSection/>
//       <TestimonialsSlider />
//       {/* <Process /> */}
//       {/* <ResultsStats /> */}
//       {/* <MarketingSolutions /> */}
//       {/* <TeamPreview /> */}
//       {/* <AwardsRecognition /> */}
//       {/* <Delhi/> */}
//       {/* <LatestBlogs /> */}
//       <HomeFAQ />
//       <Technologies/>
      
//       {/* <CTABanner /> */}
//     </>
//   );


return (
    <>
      <FloatingContactButtons
        whatsappNumber="919625350146"
        phoneNumber="+919625350146"
      />
      <Hero />              {/* H1 + CTA + form with id="get-proposal" */}
      <TrustedBy />    
      <QuickProposalForm/>     {/* real logos only */}
      <ServicesSection />   {/* one services section only */}
      <PortfolioSection />  {/* verified case studies only */}
      <LilAbout />          {/* Malviya Nagar / South Delhi section */}
      <WhyChooseUs />
      <Process />           {/* build this: How We Work */}
      <TestimonialsSlider />{/* hide until real reviews are ready */}
      <HomeFAQ />
      <CTABanner />         {/* final CTA */}
    </>
  );


}
