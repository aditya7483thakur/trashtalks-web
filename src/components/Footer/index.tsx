"use client";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-5 lg:pt-10">
        <div className="container">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-12">
            <p className="text-center text-base text-body-color dark:text-white">
              © 2024 All rights reserved. Designed and developed with
              dedication.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
