import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { styles } from "../styles";

const Certifications = () => {
  return (
    <motion.div
      variants={fadeIn("right", "spring",0, 10)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl justify-center content-center"
    >
      <h1 className={`${styles.heroSubText} text-center`}>"The mind that opens to a new idea never returns to its original size."</h1>
      <h2 className="font-bold text-[#ff8000] text-center mt-3">- Albert Einstein</h2>
    </motion.div>
  );
};

export default SectionWrapper(Certifications, "");
