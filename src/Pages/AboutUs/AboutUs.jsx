import React from "react";
import FadeContent from "../../Components/FadeContent/FadeContent";
import CurvedLoop from "../../Components/CurvedLoop/CurvedLoop";
import MagicBento from "../../Components/MagicBento/MagicBento";
import RotatingText from "../../Components/RotatingText/RotatingText";
import DomeGallery from "../../Components/DomeGallery/DomeGallery";
import OurStory from "./Components/OurStory";
import OurMission from "./Components/OurMission";
import { audio } from "motion/react-client";

const AboutUs = () => {
  const techImages = [
    { src: "https://skillicons.dev/icons?i=react", alt: "React" },
    { src: "https://skillicons.dev/icons?i=javascript", alt: "JavaScript" },
    { src: "https://skillicons.dev/icons?i=typescript", alt: "TypeScript" },
    { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js" },
    { src: "https://skillicons.dev/icons?i=python", alt: "Python" },
    { src: "https://skillicons.dev/icons?i=html", alt: "HTML" },
    { src: "https://skillicons.dev/icons?i=css", alt: "CSS" },
    { src: "https://skillicons.dev/icons?i=tailwind", alt: "TailwindCSS" },
    { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js" },
    { src: "https://skillicons.dev/icons?i=git", alt: "Git" },
    { src: "https://skillicons.dev/icons?i=github", alt: "GitHub" },
    { src: "https://skillicons.dev/icons?i=docker", alt: "Docker" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-[#060010] px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
        style={{ paddingTop: "10rem", paddingBottom: "6rem" }}
      >
        <div className="mx-auto bg-amber-500 rounded-3xl py-16 px-6 sm:px-12 relative z-10 shadow-[0_0_40px_rgba(245,158,11,0.4)]">
          {/* Elegant Quote */}
          <FadeContent direction="up" delay={0.1}>
            <p className="text-sm sm:text-base italic text-[#060010] mb-6 tracking-wide">
              “Innovation is not just what we do — it’s who we are.”
            </p>
          </FadeContent>

          {/* Premium Title */}
          <FadeContent direction="up" delay={0.3}>
            <h2 className="text-2xl sm:text-4xl font-medium text-[#060010] mb-5 leading-snug">
              We Build{" "}
              <span className="text-white bg-[#060010] px-2 rounded-md">
                Ideas
              </span>{" "}
              That
              <span className="text-white bg-[#060010] px-2 ml-1 rounded-md">
                Inspire
              </span>{" "}
              Tomorrow
            </h2>
          </FadeContent>

          <FadeContent direction="up" delay={0.5}>
            <p className="text-base sm:text-lg text-[#060010]/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              At <span className="font-medium">Error-Hive Solution</span>, we
              specialize in creating intelligent digital experiences through the
              perfect blend of &nbsp;
              <span className="px-2 bg-white/50 rounded-md font-medium text-[#060010]">
                innovation
              </span>
              ,&nbsp;
              <span className="px-2 bg-white/50 rounded-md font-medium text-[#060010]">
                precision
              </span>
              , and &nbsp;
              <span className="px-2 bg-white/50 rounded-md font-medium text-[#060010]">
                creativity
              </span>
              . We believe technology should not only perform — it should
              <span className="text-[#060010] font-semibold"> inspire</span> and
              <span className="text-[#060010] font-semibold"> connect</span>.
            </p>
          </FadeContent>

          <FadeContent direction="up" delay={0.7}>
            <button className="px-8 py-3 bg-[#060010] text-white font-medium text-sm sm:text-base rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Let&apos;s Connect
            </button>
          </FadeContent>
        </div>
      </section>

      <hr />

      <OurStory />

      <hr />

      <div className="flex flex-col items-center justify-center py-16 bg-[#060010] text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide flex items-center gap-4">
          <span className="text-amber-500 drop-shadow-md">Our</span>
          <RotatingText texts={["Mission", "Vision", "Purpose"]} mainClassName="overflow-hidden text-[#060010] font-semibold px-2 sm:px-2 md:px-3 bg-amber-500 py-0.5 sm:py-1 md:py-2 justify-center rounded-lg" staggerFrom="last" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-120%" }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1" transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2000} splitBy="characters" />
        </h2>
        <OurMission />
      </div>

      <hr />

      <div style={{ width: 'auto', height: '70vh', backgroundColor: '#060010', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <DomeGallery
          images={techImages}
          overlayBlurColor="#060010"
          grayscale={false}
          fit={0.80}
          imageBorderRadius="50px"
          openedImageBorderRadius="50px"
        />
      </div>

      <hr />


      {/* Decorative Section */}
      <section className="bg-[#060010] flex flex-col items-center justify-center overflow-hidden">
        <CurvedLoop
          marqueeText="Error - Hive Solution ✦"
          speed={2}
          curveAmount={120}
          direction="right"
          interactive={true}
        />
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={250}
          particleCount={8}
          glowColor="245, 158, 11"
        />
      </section>
    </>
  );
};

export default AboutUs;