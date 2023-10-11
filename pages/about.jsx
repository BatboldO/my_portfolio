import React from "react";
import Layout from "@/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (

   < header className="bg-slate-100 p-56 h-full ">
      <div className="flex justify-around">
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-xl text-slate-600 items-center  text-cyan-600 font-bold"
        >
         Batbold Otgonbayar
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex items-center  "
        >
          <Link className="ml-1 text-slate-600 text-sm" href="/about">
            <img src="email.png"></img>
            batbbldo@gmail.com
          </Link>
          <Link className="ml-1 text-slate-600 text-sm" href="/contact">
            17732 Ulaanbaatar, Mongolia
          </Link>
        </motion.div>
      </div>
      <div className="flex justify-center grid-rows-2 h-full ">
        <div className="bg-gray-300 flex-1 p-6">
         <div className="text-cyan-600  mb-10">Education</div>
         <div className="text-cyan-600 mb-10">Skills</div>
         <div className="text-cyan-600 mb-10">Employment history</div>

        </div>
        <div className="bg-gray-200 flex-1 p-6">
          <div>Uni</div>
          <div>Skills</div>
          <div>employment</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  

  );

};

export default About;
