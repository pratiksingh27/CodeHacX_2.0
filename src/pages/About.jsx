import Topbar from "../layouts/Topbar";
import { useEffect, useRef } from "react";
import logo from "../images/logo.jpeg"; // Make sure the path is correct
import { useInView, useMotionValue, useSpring } from "framer-motion";
// import Auto from "../layouts/Component/Auto";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Topbar />
      <div
        style={mainContentStyle}
        className="scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
      >
        <main className="flex w-full flex-col items-center justify-center">
          <div className="pt-12 px-4">
            <h1 className="sm:mb-12 lg:text-7xl sm:text-6xl text-4xl mb-6">
              Passion Fuels Purpose!
            </h1>
            <div className="grid w-full grid-cols-8 sm:gap-16 gap-8">
              <div className="xl:col-span-3 flex flex-col items-start justify-start md:col-span-4 md:order-2 col-span-8">
                <h2 className="mb-4 text-base font-bold uppercase text-dark/75">
                  Know Us More
                </h2>
                <p className="font-medium">
                  Hi, I&apos;m Pratik, a web developer and UI/UX designer with a
                  passion for creating beautiful, functional, and
                  user-centered digital experiences. With 2+ years of
                  experience in the field. I am always looking for new and
                  innovative ways to bring my clients visions to life.
                </p>

                <p className="font-medium my-4">
                  I believe that design is about more than just making things
                  look pretty, it&apos;s about solving problems and creating
                  intuitive, enjoyable experiences for users.
                </p>
              </div>

              <div className="xl:col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8  md:col-span-4 md:order-1 col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark" />
                <img
                  src={logo.src}
                  alt="CodeHacX Logo"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              <div className="xl:col-span-2 sm:flex xl:flex-col xl:items-end justify-between col-span-8 flex-row items-center md:order-3">
                <div className="flex flex-col xl:items-end justify-center items-center">
                  <span className="inline-block md:text-5xl font-bold  sm:text-4xl xs:text-4xl text-3xl md:self-center">
                    <AnimatedNumber value={20} />+
                  </span>
                  <h2 className="md:text-xl font-medium capitalize text-dark/70  xl:text-center sm:text-lg text-base xs:text-sm">
                    Projects completed
                  </h2>
                </div>

                <div className="flex flex-col xl:items-end justify-center items-center">
                  <span className="inline-block md:text-5xl font-bold sm:text-4xl xs:text-4xl text-3xl md:self-center">
                    <AnimatedNumber value={3} />+
                  </span>
                  <h2 className="md:text-xl font-medium capitalize text-dark/70 text-center sm:text-lg text-base xs:text-sm">
                    hackathons
                  </h2>
                </div>
                <div className="flex flex-col xl:items-end justify-center items-center">
                  <span className="inline-block md:text-5xl font-bold  sm:text-4xl xs:text-4xl text-3xl md:self-center">
                    <AnimatedNumber value={2} />+
                  </span>
                  <h2 className="md:text-xl font-medium capitalize text-dark/70 sm:text-lg  text-center text-base xs:text-sm">
                    years of experience
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <Auto/> */}
      </div>
    </>
  );
};

const mainContentStyle = {
  padding: "1rem",
  overflowY: "auto",
  maxHeight: "calc(100vh - 2rem)",
  scrollbarWidth: "thin",
};

export default About;
