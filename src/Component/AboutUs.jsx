import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  return (
    <div id="jai" className="flex flex-col items-center p-8 bg-gray-100">
      <Header />
      <Content />
    </div>
  );
};

const Header = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  React.useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  return (
    <motion.div
      className="flex flex-col items-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <p className="text-3xl font-medium text-teal-700">About Me</p>
      <p className="md:text-5xl md:font-bold text-3xl font-bold mt-4 md:text-black">Know Me More</p>
    </motion.div>
  );
};

const Content = () => {
  const textControls = useAnimation();
  const experienceControls = useAnimation();
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: false });

  React.useEffect(() => {
    textControls.start(textInView ? 'visible' : 'hidden');
    experienceControls.start(experienceInView ? 'visible' : 'hidden');
  }, [textControls, textInView, experienceControls, experienceInView]);

  return (
    <div className="flex items-center md:flex-row flex-col mt-10">
      <motion.div
        className="mt-10 md:flex md:flex-col md:justify-center md:items-start items-center text-center md:text-left"
        ref={textRef}
        initial="hidden"
        animate={textControls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="md:font-bold md:text-3xl flex flex-col justify-center md:items-start items-center text-center md:text-left">
          <span className="font-bold text-3xl">Hi, I'm</span>
          <span className="text-4xl font-extrabold mt-1 text-teal-700">Shivansh Shukla</span>
        </div>

        <div className="text-xl font-medium mt-3 md:text-left md:max-w-screen-sm md:mr-64">
          I'm a designer & developer with a passion for web design and data structures. I enjoy developing simple, clean, and slick websites that provide real value to the end user and also I love solving data structure problems. I have created multiple major and minor projects for my learning and showcase. Delivering work within time which meets my timeline is my motto.
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center w-300"
        ref={experienceRef}
        initial="hidden"
        animate={experienceControls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="rounded-full bg-teal-700 md:h-32 md:w-52 h-24 w-40 flex justify-center items-center mt-7">
          <span className="md:text-9xl font-bold text-7xl text-white">2</span>
        </div>
        <div className="text-xl font-medium">years of experience</div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
