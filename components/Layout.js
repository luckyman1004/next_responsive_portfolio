import LayoutStyle from "../styles/layout.module.css";

import React, { useState ,useEffect} from "react";

import Nav from "../components/Nav";

import Head from "next/head";

const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);

  const scrolling = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY < 300) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrolling);
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;1,200&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <title>Portfolio</title>
      </Head>

      <div className={LayoutStyle.container}>
        <Nav />
        <hr className={LayoutStyle.hr} />
        <main className={LayoutStyle.main}>
          {children}
          <div
            className={LayoutStyle.scroll}
            onClick={scrollTop}
            style={{ right: showScroll ? "3%" : "-30%" }}
          >
            <i className="fas fa-arrow-circle-up"></i>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
