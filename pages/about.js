import React, { useState } from "react";
import AboutStyles from "../styles/about.module.css";
import { motion } from "framer-motion";


import Year from "../components/Year";

const About = () => {




  const [year, setYear] = useState([
    {
      id: "1",
      numyear: "2017",
      para: "Start my journey",
    },
    {
      id: "2",
      numyear: "2018",
      para: "Worked as a freelance developer",
    },
    {
      id: "3",
      numyear: "2019",
      para: "Founded JavaScript",
    },
    {
      id: "4",
      numyear: "2020",
      para: "Shared my projects with the world",
    },
    {
      id: "5",
      numyear: "2021",
      para: "Started my own platform",
    },
  ]);
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: "100vw", opacity: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 130,
      }}
      exit="exit"
      variants={{
        exit: {
          x: "-100vw",
          transition: { ease: "easeInOut" },
        },
      }}
      className={AboutStyles.about}
    >
      <h1>About Me</h1>
      <div className={AboutStyles.text}>
        <p>
          The purpose of JavaScript is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </p>

        <div className={AboutStyles.yearslist}>
          {year.map((y) => {
            return <Year title={y.numyear} para={y.para} key={y.id} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
