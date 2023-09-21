import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-slate-950  position:sticky">
      <div className="flex justify-around">
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-3xl text-slate-600 items-center"
        >
          LOGO
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex items-center justify-between "
        >
          <Link className="ml-3 text-slate-600" href="/">
            Home
          </Link>
          <Link className="ml-3 text-slate-600" href="/about">
            About Me
          </Link>
          <Link className="ml-3 text-slate-600" href="/contact">
            Contact
          </Link>
          <Link className="ml-3 text-slate-600" href="/works">
            Other works
          </Link>
          <Link className="ml-3 text-slate-600" href="/media">
            Social media
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
