// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import EventHighlights from "./Components/EventsHightlights";
import LineupSection from "./Components/LineupSection";
import Countdown from "./Components/CountdownSection";
import EventInfo from "./Components/EventInfo";
import ScrollSection from "./Components/ScrollSection";
import TicketSection from "./Components/TicketSection";
import PartnersSection from "./Components/PartnersSection";
import GallerySection from "./Components/GallerySection";
import Merchandise from "./Components/Merchandise";
import CTASection from "./Components/CTASection";
import SubscriptionSection from "./Components/SubscriptionSection";
import FooterSection from "./Components/FooterSection";

function App() {
  const loadScript = (src, onLoad = () => {}) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = onLoad;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Cleanup if the component unmounts
    };
  };

  useEffect(() => {
    const cleanups = [
      loadScript("assets/js/jquery-3.7.0.min.js"),
      loadScript("assets/js/bootstrap.bundle.min.js"),
      loadScript("assets/js/jquery.magnific-popup.min.js"),
      loadScript("assets/js/swiper-bundle.min.js"),
      loadScript("assets/js/gsap.min.js"),
      loadScript("assets/js/scrollTrigger.min.js"),
      loadScript("assets/js/text-opacity.js"),
      loadScript("assets/js/odometer.js"),
      loadScript("assets/js/countdown.js"),
      loadScript("assets/js/scroll.js"),
      loadScript("assets/js/leaflet.js"),
      loadScript("assets/js/leaflet-routing-machine.min.js"),
      loadScript("assets/js/leaflet-scripts.js"),
      loadScript("assets/js/scripts.js"),
    ];

    return () => cleanups.forEach((cleanup) => cleanup && cleanup());
  }, []);

  return (
    <>
      <div className="home-7">
        <div className="ball"></div>
        <div className="cursor-text"></div>
        {/* <div className="preloader">
          <DotLottieReact
            src="https://lottie.host/d851f1dc-6ef5-40be-8ca8-bbffcd018276/wutdxEizj0.json"
            backgroundColor="#04000A"
            speed="1"
            direction="1"
            mode="normal"
            loop
            autoplay
            style={{ width: 100, height: "100%" }}
          />
        </div> */}
        {/* Header Start */}
        <Header />
        {/* Header End */}
        {/* Hero Section Start */}
        <div
          className="main"
          data-bs-spy="scroll"
          data-bs-target="#navContentmenu"
          data-bs-root-margin="0px 0px -50%"
          data-bs-smooth-scroll="true"
        >
          <HeroSection />
        </div>
        {/* Hero Section End */}
        {/* About Section Start */}
        <AboutSection />
        {/* About Section End */}
        {/* Events Highlights Section Start */}
        <EventHighlights />
        {/* Events Highlights Section End */}
        {/* Lineup Section Start */}
        <LineupSection />
        {/* Lineup Section End */}
        {/* Countdown Section Start */}
        <Countdown />
        {/* Countdown Section End */}
        {/* EventDayWise Schedule Start */}
        <EventInfo />
        {/* EventDayWise Schedule End */}
        {/* Scroll Section Start */}
        <ScrollSection />
        {/* Scroll Section End */}
        {/* Ticket Section Start */}
        <TicketSection />
        {/* Ticket Section End */}
        {/* Partners Section Start */}
        <PartnersSection />
        {/* Partners Section End */}
        {/* Gallery Section Start */}
        <GallerySection />
        {/* Gallery Section End */}
        {/* Merchandise Section Start */}
        <Merchandise />
        {/* Merchandise Section End */}
        {/* CTA Section Start */}
        <CTASection />
        {/* CTA Section End */}
        {/* Subscription Section Start */}
        <SubscriptionSection />
        {/* Subscription Section End */}
      </div>
      <FooterSection />
    </>
  );
}

export default App;
