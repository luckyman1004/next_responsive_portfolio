import React from "react";

import Link from "next/link";

import NavStyle from "../styles/nav.module.css";

import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav className={NavStyle.nav}>
      <motion.h1 drag>
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            type: "spring",
            stiffness: 150,
          }}
        >
          P
        </motion.span>
        ortfolio
      </motion.h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Touch</Link>
        </li>
      </ul>

      <ul className={NavStyle.iconlinks}>
        <li>
          <i className="fab fa-github"></i>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
